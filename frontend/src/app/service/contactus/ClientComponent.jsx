'use client'

import { PostFeedback } from "@/Services/user";
import { useState } from "react";
import { toast } from "sonner";
import { useContext } from "react";
import MenuContext from "@/Context/menuContext";
import { useEffect } from "react";
export default function ClientComponent() {
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  async function CreateFeedback(e){
    e.preventDefault();
    let obj = {"name" : name, "email" : email, "message" : message};
    try{
        let res = await PostFeedback(obj)
        toast("Feedback Submitted", {
            description : "The feedback was submitted successfully."
        })
        setName('');
        setEmail('');
        setMessage('');
    }catch(error){
        console.log(error);
        toast("Something went wrong", {
            description : "There was an error while submitting the feedback."
        })
    }

  }
  const {setLevel1, setLevel2} = useContext(MenuContext);
  useEffect(()=>{
    setLevel1("About");
    setLevel2("Contact Us");
  },[])
  return (
    <div>
      <section className="bg-blue-600 text-white py-16 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">
            Contact <span className="text-yellow-400">CrazyPolls</span>
          </h1>
          <p className="text-lg">
            Have a question, suggestion, or feedback? Reach out to us!
          </p>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow">
          <h2 className="text-3xl font-semibold text-center mb-6">
            Get in Touch
          </h2>
          <form onSubmit={(e)=>{CreateFeedback(e)}} method="POST" className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium">
                Your Name
              </label>
              <input
                type="text"
                className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your name"
                value={name}
                onChange={(e)=>{setName(e.target.value)}}
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">
                Your Email
              </label>
              <input
                type="email"
                className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your email"
                value={email}
                onChange={(e)=>{setEmail(e.target.value)}}
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Message</label>
              <textarea
                rows="5"
                className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Write your message"
                value={message}
                onChange={(e)=>{setMessage(e.target.value)}}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">
            Other Ways to Reach Us
          </h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">📍 Address</h3>
              <p className="text-gray-600">
                123, Cannaught Place, New Delhi
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">📧 Email</h3>
              <p className="text-gray-600">support@crazypoll.com</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">📞 Phone</h3>
              <p className="text-gray-600">+91 84753 47375</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-6 bg-blue-600 text-white text-center">
        <p>© 2025 PollMaster. All rights reserved.</p>
      </footer>
    </div>
  );
}
