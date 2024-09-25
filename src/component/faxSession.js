import React, { useState } from 'react';
import FaxSupport from './faxSupport';
import './faxSession.css';

const FaxSession = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleExpand = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index); // Toggle the clicked item
    };


    return (
        <div className="fax-session-container">
            <h2 className='mb-5 text-center' style={{ color: "#0c305b" }}>FAQ</h2>
            <div className='faxSession-1'>
                <FaxSupport text='Cheapsmmglobal services safe to buy?' expanded={expandedIndex === 0}
                    toggleExpand={() => toggleExpand(0)} text1='It is definitely 100% safe and secure to use Cheapsmmglobal services. 
                We give the best real-quality services in the market.'>
                </FaxSupport>

                <FaxSupport text='Smm Panel - Cheapsmmglobal is best & Cheapest SMM panel' expanded={expandedIndex === 1}
                    toggleExpand={() => toggleExpand(1)} text1='Get the Best and cheapest SMM panel support 24*7 from our team. 
                our SMM panel services will boost your social media presence. '>
                </FaxSupport>
            </div>

            <div className='faxSession-1'>
                <FaxSupport text='What are the payment methods accepted on SMM Panel?' expanded={expandedIndex === 2} 
                    toggleExpand={() => toggleExpand(2)} text1='Cheapsmmglobal accepts all payments Gpay, Phone pe, Paytm, Amazon Pay, Fampay, 
                All Cards, PayPal, Western Union, Stripe, Payoneer, etc. '>
                </FaxSupport>
                <FaxSupport text='A mass order — What does it mean?' expanded={expandedIndex === 3}
                    toggleExpand={() => toggleExpand(3)} text1='The mass order feature helps a lot when you need to place several orders at once.'>
                </FaxSupport>
            </div>

            <div className='faxSession-1'>
                <FaxSupport text='Drip-feed — What does it mean?' expanded={expandedIndex === 4} toggleExpand={() => toggleExpand(4)} text1="
            Drip-feed allows for imitating the organic growth of your accounts. Let's say you want 1000 likes on your IG post. 
            You can get all 1000 right away or make the process more seamless: 100 likes per day for 10 days.">
                </FaxSupport>
            </div>
        </div>
    );
};

export default FaxSession;
