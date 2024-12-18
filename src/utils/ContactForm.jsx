import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { OutlineButton } from './OutlineButton';

export const ContactForm = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);  // Estado para mostrar cuando se está enviando
  const [message, setMessage] = useState('');  // Estado para el mensaje de éxito o error

  const sendEmail = (e) => {
    e.preventDefault();

    const lastSentTime = localStorage.getItem('lastSentTime');
    const currentTime = Date.now();

    // Convertir el lastSentTime a número antes de la operación
    const timeDifference = currentTime - parseInt(lastSentTime, 10);

    // Limitar el envío a una vez cada 10 minutos (600000 ms)
    if (lastSentTime && timeDifference < 600000) {
      setMessage('Debes esperar 10 minutos antes de enviar otro mensaje.');
      return;
    }

    setIsSending(true);
    setMessage('');

    emailjs.sendForm(
      'service_74xuhyq',  // Reemplaza con tu Service ID
      'template_gvnrfpi', // Reemplaza con tu Template ID
      form.current,
      'SwTo6_LS0DL5IfvLB'  // Reemplaza con tu User ID
    )
      .then((result) => {
        localStorage.setItem('lastSentTime', Date.now());  // Almacenar la última vez que se envió un mensaje
        setMessage('¡Mensaje enviado con éxito!');
        setIsSending(false);
      }, (error) => {
        setMessage('Hubo un error al enviar el mensaje, por favor intenta de nuevo.');
        setIsSending(false);
      });
  };



  return (
    <div>
      <div className='font-raleway text-tipo'>
        <form ref={form} onSubmit={sendEmail} className="space-y-5 p-10">
          <div>
            <input
              type="text"
              name="user_name"
              className="w-full border-b border-tipo bg-transparent p-2 placeholder:text-tipo"
              placeholder= 'Nombre*'
              required
            />
          </div>
          <div>
            <input
              type="email"
              name="user_email"
              className="w-full border-b border-tipo bg-transparent placeholder:text-tipo p-2"
              placeholder='Email*'
              required
            />
          </div>
          <div>
            <textarea
              name="message"
              className="w-full h-36 border-b border-tipo bg-transparent p-2 placeholder:text-tipo resize-none"
              placeholder= 'Mensaje*'
              required
            />
          </div>

          {/* Botón de envío con estado de cargando */}
          <div className="flex">
            <OutlineButton
              type="submit"
              disabled={isSending}  // Deshabilita el botón cuando se está enviando
            >
              {isSending ? 'Enviando...' : 'Enviar'}
            </OutlineButton>
          </div>

          {/* Mensaje de éxito o error */}
          {message && (
            <p className={`mt-5 ${message.includes('error') ? 'text-red-500' : 'text-tipo'}`}>
              {message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};
