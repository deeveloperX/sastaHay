import React, { useState } from 'react';
import { 
  FiPlus, 
  FiMinus, 
} from 'react-icons/fi';

export default function PrivacyPolicy() {
  const [openItem, setOpenItem] = useState('left-0');

  const toggleItem = (key) => {
    setOpenItem(openItem === key ? null : key);
  };

  // Left column FAQ data array
  const leftFaqData = [
    {
      key: 'left-0',
      question: 'Scope and updates of this user privacy',
      answer: 'This user privacy statement applies to your use of this website and all SastaHay applications, services, products and tools (collectively the Services), regardless of how you access or use these services, including access via mobile devices and apps.',
    },
    {
      key: 'left-1',
      question: 'Controller',
      answer: 'SastaHay is responsible for the collection and processing of your personal data in connection with the provision of the Services depending on how you use our Services. Full address is as follow: SastaHay Private Limited, Suit 1305, NSTP Nust, Sector H-12, Islamabad Pakistan.',
    },
    {
      key: 'left-2',
      question: "What personal data we collect and process",
      answer: 'Information posted on SastaHay is obviously publicly available. In order to provide you the services, we may collect, store and process your personal information including but not limited to your account ID, name, gender, age, email address, phone number, postal address or any other required details. Further, we collect, non-personally identifiable information about you in a number of ways, including tracking your activities through your IP address and your mobile device ID. We do not collect any personally identifiable information about you unless you voluntarily submit such information to us, by, for example, filling out a survey or registration form. The types of information that may be requested include your name, and your email address.',
    },
    {
      key: 'left-3',
      question: 'Your non-personal information',
      answer: 'Device Information: Information about the computer, mobile, laptop, tablet or any other internet enabled electronic device (Device) you use to access the Platform. This may include real-time information about the geographic location of your device as permitted by you, internet connection, your IP address, operating systems, platforms, browsing information, device type, device ID, network information, metadata and other information associated with other files stored on your Device, last URL visited, your website search history.',
    },
    {
      key: 'left-4',
      question: 'Use of information',
      answer: 'SastaHay collect your Information solely for the purpose of providing you the products or services that is connected with the function or activity of the SastaHay which includes but not limited',
    },
    {
      key: 'left-5',
      question: 'Information to law enforcement authorities, regulators and other',
      answer: 'We may disclose your personal data to law enforcement authorities, regulators, governmental or public bodies and other relevant third parties to comply with any legal or regulatory requirements. In addition to this, SastaHay reserves the right to share your information with any government agency or other authorized law enforcement agencies mandated under law to obtain your information for the purpose of verification of identity or for prevention, detection, investigation including but not limited to cyber incidents, prosecution, and punishment of offences etc. We may process your Information outside Pakistan on legally provided mechanisms to lawfully transfer your Information across borders. We may share your information in any other circumstances where we have your consent.',
    },
    {
      key: 'left-6',
      question: 'Use of cookies',
      answer: 'When you view our website, we might store some information on your computer. This information will be in the form of a cookies or similar file. Cookies are small pieces of information stored on your hard drive, not on our site. Cookies do not spy on you or otherwise invade your privacy, and they cannot invade your hard drive and steal information. Rather, they help you navigate a web site as easily as possible. We use cookies to deliver content specific to your interests and to prevent you from reentering all your registration data at each connection.',
    },
  ];

  // Right column FAQ data array
  const rightFaqData = [
    {
      key: 'right-0',
      question: 'Your rights to control your personal information',
      answer: 'If you choose to close your account, we will delete your personal information or de-identify it so that it is anonymous and not attributed to your identity. We will retain your personal information after you have closed your account if reasonably necessary to comply with our legal obligations (including law enforcement requests), meet regulatory requirements, resolve disputes, maintain security, prevent fraud and abuse, enforce our user agreement, or fulfill your request to unsubscribe from further messages from us. We will retain de-personalized information after your account has been closed.',
    },
    {
      key: 'right-1',
      question: "Withdraw consent/opt-out",
      answer: 'We will only collect and process personal information about you where we have lawful bases. Lawful bases include consent (where you have given consent), contract (where processing is necessary for the performance of a contract with you (e.g. to deliver products or services you have requested)) and legitimate interests. Where we rely on your consent to process personal information, you have the right to withdraw or decline your consent at any time and where we rely on legitimate interests, you have the right to object.',
    },
    {
      key: 'right-2',
      question: 'Security',
      answer: 'Our site has industry standard security measures in place to protect the loss, misuse and alteration of the information under our control. While there is no such thing as perfect security on the internet, we will take all reasonable steps to ensure the safety of your personal information from unauthorized access, usage or disclosure or alteration.',
    },
    {
      key: 'right-3',
      question: 'Other websites links',
      answer: 'Our website contains links to other websites. Our mobile application may also contain links to other mobile applications and websites. If you click on one of these links, please note that each one will have its own privacy policy. We do not control these websites/apps and SastaHay is not responsible for the privacy practices or the content of such websites and mobile applications. We are not responsible for the direct or indirect consequences of you linking to any other website from this website. When you leave our platform, we encourage you to read the privacy notice of every website you visit.',
    },
    {
      key: 'right-4',
      question: 'Public forums',
      answer: 'SastaHay has a very active community in our forums. Please remember that any information that is disclosed in these areas becomes public information and you should exercise caution when deciding to disclose your personal information.',
    },
    {
      key: 'right-5',
      question: 'Change in terms of privacy policy',
      answer: 'SastaHay reserves the right to amend or modify this privacy policy at any time, as and when the need arises. We request you to keep it up to date with legal requirements and the way we operate our business. Please regularly check this privacy policy from time to time to keep you apprised of changes made/latest version of this privacy policy. Your continued use of the Platform gives your unconditional acceptance to such change in terms of Privacy Policy.',
    },
    {
      key: 'right-6',
      question: 'Contact us',
      answer: 'If you have enquiry or concern related to this privacy policy or collection, storage, retention or disclosure of your Information under the terms of this privacy policy or terms of use or any other terms and conditions of or its other business entities including any queries or grievances, or the way in which we are handling personal data please contact our admin department via the contact page.',
    },
  ];

  return (
    <div className="container py-5" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
      
      {/* Header Section */}
      <div className="text-center mb-5">
        <h2 className="fw-bold mb-2" style={{ fontSize: '2rem', color: '#111' }}>
          Privacy Policy
        </h2>
        <p className="text-secondary" style={{ fontSize: '15px' }}>
          In our user privacy we have compiled all essential information about our handling of your personal data and your corresponding rights for you. SastaHay is committed to protecting the privacy of our users. This statement applies with respect to the information that we collect from our website as well as our Mobile Application. Amendments to this statement will be posted at this URL and will be effective when posted. We care about your privacy and are committed to protecting your personal data. This privacy statement will inform you how we handle your personal data, your privacy rights and how the law protects you. Your continued use of this site and mobile application following the posting of any amendment, modification or change shall constitute your acceptance thereof. Please read this privacy statement carefully before using our Services. This User Privacy Policy is effective from 1st January, 2021
        </p>
      </div>

      {/* Two-Column FAQ Accordion */}
      <div className="row g-4 mb-5">
        
        {/* Left Column Mapped */}
        <div className="col-12 col-lg-6">
          {leftFaqData.map((item) => (
            <div key={item.key} className="border-bottom py-3">
              <div 
                className="d-flex align-items-center justify-content-between" 
                style={{ cursor: 'pointer' }}
                onClick={() => toggleItem(item.key)}
              >
                <h6 className="fw-bold mb-0 text-uppercase" style={{ fontSize: '12px', letterSpacing: '0.8px', color: '#111' }}>
                  {item.question}
                </h6>
                <div 
                  className="rounded-circle d-flex align-items-center justify-content-center text-white"
                  style={{ width: '22px', height: '22px', backgroundColor: '#333', fontSize: '12px' }}
                >
                  {openItem === item.key ? <FiMinus /> : <FiPlus />}
                </div>
              </div>
              {openItem === item.key && (
                <div className="pt-3 pb-1 text-secondary" style={{ fontSize: '14px' }}>
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Column Mapped */}
        <div className="col-12 col-lg-6">
          {rightFaqData.map((item) => (
            <div key={item.key} className="border-bottom py-3">
              <div 
                className="d-flex align-items-center justify-content-between" 
                style={{ cursor: 'pointer' }}
                onClick={() => toggleItem(item.key)}
              >
                <h6 className="fw-bold mb-0 text-uppercase" style={{ fontSize: '12px', letterSpacing: '0.8px', color: '#111' }}>
                  {item.question}
                </h6>
                <div 
                  className="rounded-circle d-flex align-items-center justify-content-center text-white"
                  style={{ width: '22px', height: '22px', backgroundColor: '#333', fontSize: '12px' }}
                >
                  {openItem === item.key ? <FiMinus /> : <FiPlus />}
                </div>
              </div>
              {openItem === item.key && (
                <div className="pt-3 pb-1 text-secondary" style={{ fontSize: '14px' }}>
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}