import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const ContactForm = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
        };
    
        try {
        const response = await fetch(
            '/.netlify/functions/sendMail.js',
            requestOptions
        );
        const jsonData = await response.json();
    
        console.log(jsonData);
        toast.success('Submission successful!');
        } catch (error) {
        console.log(error);
        toast.error('An error occured! See console for more details.');
        }
    };

    return (
        <div className="contact-bg" id="contact">
            <div className="container">
                <div className="title-container">
                    <h1 className="MONTSERRAT WHITE">Let's get in touch</h1>
                </div>
                <div className="contacts-container">
                    <div className="contact-container">  
                        <div className="contact-card">
                            <img src="./phone-icon.svg" alt="" />
                            <div className="contact-card-text">
                                <span className="LIGHTGREY ESTEBAN">Phone Number</span>
                                <p className="WHITE MAITREE">+358 40 932 3040</p>
                            </div>
                        </div>
                        <div className="contact-card">
                            <img src="./email-icon.svg" alt="" />
                            <div className="contact-card-text">
                                <span className="LIGHTGREY ESTEBAN">Email</span>
                                <p className="WHITE MAITREE">Tim-agency@gmail.com</p>
                            </div>
                        </div>
                        <div className="contact-card">
                            <img src="./instagram-icon.svg" alt="" />
                            <div className="contact-card-text">
                                <span className="LIGHTGREY ESTEBAN">Instagram</span>
                                <p className="WHITE MAITREE">@TIM_AGENCY</p>
                            </div>
                        </div>
                    </div>

                    <form className="form-container"
                        onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-top">
                            <div className='small-form'>
                                <label className="WHITE ESTEBAN" htmlFor="email-input">
                                    Email
                                    <input
                                    {...register('email', {
                                        required: true,
                                        pattern: /^[\w-/.]+@([\w-]+\.)+[\w-]{2,4}$/,
                                    })}
                                    id="email-input"
                                    type="text"
                                    className='MAITREE small-text-input'
                                    />
                                    {errors.email && (
                                    <span className="text-red-600">email required</span>
                                )}
                                </label>
                            </div>
                            <div className="small-form">
                                <label className="WHITE ESTEBAN" htmlFor="name-input">
                                    Name
                                    <input
                                    {...register('name', { required: true })}
                                    id="name-input"
                                    type="text"
                                    className="MAITREE small-text-input"
                                    />
                                    {errors.name && (
                                    <span className="text-red-600">name required</span>
                                    )}
                                </label>
                            </div>
                        </div>

                        <div className="FULLWIDTH">
                            <div className="big-form">
                            <label className="MAITREE WHITE" htmlFor="message-input">
                                Message
                                <textarea
                                    {...register('message', { required: true })}
                                    id="message-input"
                                    placeholder={"Hi, my name is...."}
                                    className="FULLWIDTH big-text-"
                                ></textarea>
                                {errors.message && (
                                    <span className="text-red-600">Write something!</span>
                                )}
                            </label>
                            </div>
                        </div>

                        <div className="FULLWIDTH">
                        <input
                            {...register('privacy', { required: true })}
                            id="privacy-policy-checkbox"
                            type="checkbox"
                            className="contact-checkbox"
                            />
                            <span className="ESTEBAN LIGHTGREY">By selecting this, you agree to <a href="#">privacy policy</a>.</span>
                        </div>

                        <div className="FULLWIDTH">
                            <button type="submit" className="SMALLBUTTON ESTEBAN WHITE BUTTONSIZE">Submit</button>
                        </div>

                    </form> 

                </div>
            </div>
        </div>
    )
}

export default ContactForm