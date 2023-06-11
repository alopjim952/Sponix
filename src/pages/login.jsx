import { Auth } from '@supabase/auth-ui-react'
import { supabase } from '../supabase/supabase.config'
import {
    // Import predefined theme
    ThemeSupa,
  } from '@supabase/auth-ui-shared'
import { useEffect, useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, Navigate } from 'react-router-dom'
import { changeFavorite, login } from '../redux/slice/Slice'
import { insertUser, selectFavorite, selectUser } from '../database/Supabase'

const Login = () => {
    const navigate = useNavigate();
    let { user } = useSelector((state) => state.auth);

    const dispatch = useDispatch();
    if(user){
      return <Navigate to={'/home'}></Navigate>;
    }

    useEffect(() => {
        const {data} = supabase.auth.onAuthStateChange(
          async (event, session) => {
              console.log(event);
              if(event == 'SIGNED_IN'){
                navigate('/home', {replace:true});
                localStorage.setItem('user', session.user.user_metadata);
                dispatch(login(session.user.user_metadata));
                selectUser(session.user.email).then((u) => {
                  if(!u[0]){
                    insertUser(session.user.user_metadata);
                  }
                })
              }
          }
        )

        return () => data.subscription.unsubscribe(data.subscription.id);
    }, []);

    return (
      <div className="auth">
          <Auth 
            supabaseClient={supabase}
            providers={['spotify']}
            appearance={{theme: ThemeSupa}}
            theme="dark"
            localization={{
                variables: {
                    sign_up : {
                      "email_label" : " Dirección de correo electrónico " ,
                      "password_label" : " Crear una contraseña " ,
                      "email_input_placeholder" : " Su dirección de correo electrónico " ,
                      "password_input_placeholder" : " Tu contraseña " ,
                      "button_label" : " Registrarse " ,
                      "loading_button_label" : " Registrarse... " ,
                      "social_provider_text" : " Inicia sesión con {{provider}} " ,
                      "link_text" : "¿ No tienes una cuenta? Regístrate " ,
                      "confirmation_text" : " Revise su correo electrónico para el enlace de confirmación "
                    },
                    "sign_in" : {
                      "email_label" : " Dirección de correo electrónico " ,
                      "password_label" : " Su contraseña " ,
                      "email_input_placeholder" : " Su dirección de correo electrónico " ,
                      "password_input_placeholder" : " Tu contraseña " ,
                      "button_label" : " Iniciar sesión " ,
                      "loading_button_label" : " Iniciando sesión... " ,
                      "social_provider_text" : " Inicia sesión con {{provider}} " ,
                      "link_text" : "¿ Ya tienes una cuenta? Inicia sesión "
                    },
                    "magic_link" : {
                      "email_input_label" : " Dirección de correo electrónico " ,
                      "email_input_placeholder" : " Su dirección de correo electrónico " ,
                      "button_label" : " Enviar enlace mágico " ,
                      "loading_button_label" : " Enviando enlace mágico... " ,
                      "link_text" : " Enviar un correo electrónico de enlace mágico " ,
                      "confirmation_text" : " Revise su correo electrónico para el enlace mágico "
                    },
                    "forgotten_password" : {
                      "email_label" : " Dirección de correo electrónico " ,
                      "password_label" : " Su contraseña " ,
                      "email_input_placeholder" : " Su dirección de correo electrónico " ,
                      "button_label" : " Enviar instrucciones para restablecer la contraseña " ,
                      "loading_button_label" : " Enviando instrucciones de reinicio... " ,
                      "link_text" : "¿ Olvidaste tu contraseña? " ,
                      "confirmation_text" : " Revise su correo electrónico para el enlace de restablecimiento de contraseña "
                    },
                    "update_password" : {
                      "password_label" : " Nueva contraseña " ,
                      "password_input_placeholder" : " Su nueva contraseña " ,
                      "button_label" : " Actualizar contraseña " ,
                      "loading_button_label" : " Actualizando contraseña... " ,
                      "confirmation_text" : " Su contraseña ha sido actualizada "
                    },
                    "verify_otp" : {
                      "email_input_label" : " Dirección de correo electrónico " ,
                      "email_input_placeholder" : " Su dirección de correo electrónico " ,
                      "phone_input_label" : " Número de teléfono " ,
                      "phone_input_placeholder" : " Tu número de teléfono " ,
                      "token_input_label" : " Ficha " ,
                      "token_input_placeholder" : " Su token Otp " ,
                      "button_label" : " Verificar token " ,
                      "loading_button_label" : " Iniciando sesión... "
                    }
                  },
            }}
            />
      </div>
        
    );
}
 
export default Login;