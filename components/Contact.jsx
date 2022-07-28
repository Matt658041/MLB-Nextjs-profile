import Image from 'next/image'
import React, {useState} from 'react'
import {AiOutlineMail} from 'react-icons/ai'
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Link from 'next/link'
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'
import axios from 'axios'

const Contact = () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });
  const [inputs, setInputs] = useState({
    email: '',
    message: '',
  });
  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        email: '',
        message: '',
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };
  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    axios({
      method: 'POST',
      url: 'https://formspree.io/f/xlevrrja',
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(
          true,
          'Thank you, your message has been submitted.',
        );
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });
  };
  return (
    <div id = 'contact' className='w-full lg:h-screen'>
     <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
      <p className='text-xl tracking-widest uppercase text-[#222737]'>Contact</p>
      <div className='grid lg-grid-col-5 gap-8'>
        <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
          <div className='lg:p-4 h-full'>
            <div>
              <h2 className='py-2'>Matthew Boisse</h2>
              <p>Full-Stack Developer</p>
              <p className='py-4'>I am available for a full-time position. Contact me with any questions.</p>
            </div>
            <div>
              
      <form onSubmit={handleOnSubmit}>
        <label className='uppercase text-lg py-4' htmlFor="email">Email</label>
        <input className='w-full border-2 rounded-lg p-3 flex border-gray-300'
          id="email"
          type="email"
          name="_replyto"
          onChange={handleOnChange}
          required
          value={inputs.email}
        />
        <label className='uppercase text-lg py-4' htmlFor="message">Message</label>
        <textarea className='w-full border-2 rounded-lg p-3 flex border-gray-300 my-6'
          id="message"
          name="message"
          onChange={handleOnChange}
          required
          value={inputs.message}
        />
        <div className='bg-blue-600 rounded-xl my-6 '>
        <button className=' w-full p-2 text-white ' type="submit" disabled={status.submitting}>
          {!status.submitting
            ? !status.submitted
              ? 'Submit'
              : 'Submitted'
            : 'Submitting...'}
        </button>
        </div>
      </form>
      {status.info.error && (
        <div className="error">Error: {status.info.msg}</div>
      )}
      {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
      </div>
      </div>
      </div>
      </div>
      </div>
        <div className='flex gap-x-5 items-center justify-between py-4 max-w-[330px] m-auto py-4'>
        <div className=' rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
              <Link  href='https://www.linkedin.com/in/matthew-boisse-b3a296224/'>
                <FaLinkedinIn  a href="www.linkedin.com/in/matthew-boisse-b3a296224" />
                </Link>
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
            <Link  href='https://github.com/Matt658041'>
                <FaGithub />
                </Link>
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
            <Link  href='mailto:matthewboisse@gmail.com'>
                <AiOutlineMail/>
                </Link>
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
            <Link  href='mailto:matthewboisse@gmail.com'>
                <BsFillPersonLinesFill />
                </Link>
            </div>
          </div>
          <div className='flex justify-center py-12'>
    <Link href='/'>
      <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
        <HiOutlineChevronDoubleUp className='m-auto text-[#213571]' size={30}/>
      </div>
    </Link>
  </div>

      </div>

    
      
    
  );
};
export default Contact