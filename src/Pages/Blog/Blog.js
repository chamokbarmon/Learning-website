import React from 'react';

const Blog = () => {
    return (
       <div>
         <div className='bg-black p-4 text-white rounded mb-3'>
         <p>What is Cors ?</p>
         <p>Ans : Cross-origin resource sharing (CORS) is a browser mechanism which enables controlled access to resources located outside of a given domain. It extends and adds flexibility to the same-origin policy (SOP). However, it also provides potential for cross-domain attacks, if a website's CORS policy is poorly configured and implemented. CORS is not a protection against cross-origin attacks such as cross-site request forgery (CSRF).</p>
        </div>
        <br />
        <div className='bg-black p-4 text-white rounded mb-3'>
         <p>Why are you using firebase ?</p>
         <p>Ans : Firebase provides tools to grow your app and business, for startups & global enterprises. Get your app up and running quickly & securely with fully managed backend infrastructure. 15+ Products & Solutions. Monitor App Performance. Release Apps Confidently.</p>
        </div>
        <br />
        <div className='bg-black p-4 text-white rounded mb-3'>
         <p>What other oftions do you have to implement Authtication ?</p>
         <p>Ans : 5 Common Authentication Types:
            1.Password-based authentication. Passwords are the most common methods of authentication. ...
            <br />
            2.Multi-factor authentication. ...
              <br />
            3.Certificate-based authentication. ...
            <br />
            4.Biometric authentication. ...
            <br />
            5.Token-based authentication.</p>
        </div>
        <br />
        <div className='bg-black p-4 text-white rounded mb-3'>
         <p>What is Node ? How Does Node Work?</p>
         <p>It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>
        </div>
       </div>
    );
};

export default Blog;