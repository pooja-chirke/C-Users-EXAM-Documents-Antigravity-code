/**
 * VJTI HOC 2027 - Organizing Committee Page
 *
 * Committee Sequence:
 * 1. Chief Patrons
 * 2. International Advisory Board
 * 3. National Advisory Board
 * 4. Technical Track Chairs
 * 5. Organizing Committee
 * 6. Support Team
 *
 * Features:
 * - English + Marathi content together
 * - 5 cards per row on desktop
 * - Photos are optional
 * - Missing photos automatically show person icon
 * - Advisory Board photos loaded from dedicated folders
 * - Organizing Committee photos loaded dynamically
 *
 * @file VJTI-HOC-Conference/frontend/src/pages/Committee/CommitteePage.jsx
 */

import React from 'react';
import MainLayout from '../../layouts/MainLayout';

// =========================================================
// CHIEF PATRONS PHOTOS
// =========================================================

import sunilLuthra from '../../assets/committee/Sunil-luthra.jpg';
import sudhirMehta from '../../assets/committee/sudhir-mehta.jpg';
import sdKore from '../../assets/committee/sd-kore.jpg';
import venugopalReddy from '../../assets/committee/b-venugopal-reddy.jpg';
import pramodNaik from '../../assets/committee/pramod-naik.jpg';

// =========================================================
// INTERNATIONAL ADVISORY BOARD PHOTOS
// =========================================================

import jyotikaAthavale from '../../assets/committee/international-advisory/jyotika-athavale.jpg';
import dineshRajan from '../../assets/committee/international-advisory/dinesh-rajan.jpg';
import arnavShah from '../../assets/committee/international-advisory/arnav-shah.jpg';
import bhagyashriNivdunge from '../../assets/committee/international-advisory/bhagyashri-nivdunge.jpg';

// =========================================================
// NATIONAL ADVISORY BOARD PHOTOS
// =========================================================

import amayKarkare from '../../assets/committee/national-advisory/amay-karkare.jpg';
import amitSaxena from '../../assets/committee/national-advisory/amit-saxena.jpg';
import kunjTandon from '../../assets/committee/national-advisory/kunj-tandon.jpg';
import laxmanNetak from '../../assets/committee/national-advisory/laxman-netak.jpg';
import nishaKurkure from '../../assets/committee/national-advisory/nisha-kurkure.jpg';
import padmajaJoshi from '../../assets/committee/national-advisory/padmaja-joshi.jpg';
import rhushabhGoradia from '../../assets/committee/national-advisory/rhushabh-goradia.jpg';
import rushikeshJoshi from '../../assets/committee/national-advisory/rushikesh-joshi.jpg';
import sunilBhirud from '../../assets/committee/national-advisory/sunil-bhirud.jpg';

// =========================================================
// TECHNICAL TRACK CHAIR PHOTOS
// =========================================================

import stShingade from '../../assets/committee/st-shingade.jpg';
import ssUdmale from '../../assets/committee/ss-udmale.jpg';
import vbNikam from '../../assets/committee/vb-nikam.jpg';
import mrShirole from '../../assets/committee/mr-shirole.jpg';
import mmChandane from '../../assets/committee/mm-chandane.jpg';

// =========================================================
// ORGANIZING COMMITTEE PHOTOS
// =========================================================
//
// Photos are optional.
//
// Existing files are loaded dynamically.
// If a photo does not exist, the card automatically
// displays a person icon.
//
// =========================================================

const organizingPhotoFiles = import.meta.glob(
  '../../assets/committee/organizing-committee/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}',
  {
    eager: true,
    query: '?url',
    import: 'default'
  }
);

// =========================================================
// FILE NAME NORMALIZER
// =========================================================

const normalizeFileName = (value = '') =>
  value
    .toLowerCase()
    .replace(/\.[^/.]+$/, '')
    .replace(/[^a-z0-9]/g, '');

// =========================================================
// FIND ORGANIZING COMMITTEE PHOTO
// =========================================================

const getOrganizingPhoto = (fileName) => {
  if (!fileName) return null;

  const target = normalizeFileName(fileName);

  const matchedKey = Object.keys(organizingPhotoFiles).find((key) => {
    const actualFileName = key.split('/').pop();

    return normalizeFileName(actualFileName) === target;
  });

  return matchedKey
    ? organizingPhotoFiles[matchedKey]
    : null;
};

// =========================================================
// COMMON MARATHI FONT
// =========================================================

const marathiFont = {
  fontFamily:
    "'Mangal', 'Noto Sans Devanagari', 'Mukta', 'Hind', sans-serif"
};

// =========================================================
// COMPONENT
// =========================================================

export const CommitteePage = () => {

  // =======================================================
  // 1. CHIEF PATRONS
  // =======================================================

  const patrons = [

    {
      name: 'Shri. B. Venugopal Reddy',
      marathiName: 'श्री. बी. वेणुगोपाल रेड्डी',

      title: 'Hon’ble Addl. Chief Secretary',
      marathiTitle: 'माननीय अतिरिक्त मुख्य सचिव',

      role: 'Chief Patron',
      marathiRole: 'मुख्य संरक्षक',

      image: venugopalReddy
    },

    {
      name: 'Dr. Pramod Naik',
      marathiName: 'डॉ. प्रमोद नाईक',

      title: 'Hon’ble Minister for Technical & Higher Education',
      marathiTitle: 'माननीय तंत्रशिक्षण व उच्च शिक्षण मंत्री',

      role: 'Chief Patron',
      marathiRole: 'मुख्य संरक्षक',

      image: pramodNaik
    },

    {
      name: 'Dr. Sudhir Mehta',
      marathiName: 'डॉ. सुधीर मेहता',

      title: 'Chairperson, Board of Governors, VJTI',
      marathiTitle: 'अध्यक्ष, प्रशासकीय मंडळ, VJTI',

      role: 'Chief Patron',
      marathiRole: 'मुख्य संरक्षक',

      image: sudhirMehta
    },

    {
      name: 'Dr. S. D. Kore',
      marathiName: 'डॉ. एस. डी. कोरे',

      title: 'Director, VJTI',
      marathiTitle: 'संचालक, VJTI',

      role: 'Chief Patron',
      marathiRole: 'मुख्य संरक्षक',

      image: sdKore
    },

    {
      name: 'Dr. Sunil Luthra',
      marathiName: 'डॉ. सुनील लुथरा',

      title: 'Director of AICTE, New Delhi',
      marathiTitle: 'संचालक, एआयसीटीई, नवी दिल्ली',

      role: 'Chief Patron',
      marathiRole: 'मुख्य संरक्षक',

      image: sunilLuthra
    }

  ];

  // =======================================================
  // 2. INTERNATIONAL ADVISORY BOARD
  // =======================================================

  const internationalAdvisory = [

    {
      name: 'Dr. Jyotika Athavale',
      marathiName: 'डॉ. ज्योतिका आठवले',

      designation: 'IEEE CS President-Elect',
      marathiDesignation: 'IEEE CS अध्यक्ष-नियुक्त',

      affiliation: 'USA',
      marathiAffiliation: 'अमेरिका',

      photo: jyotikaAthavale
    },

    {
      name: 'Dr. Dinesh Rajan',
      marathiName: 'डॉ. दिनेश राजन',

      designation: 'Lyle School of Engineering',
      marathiDesignation: 'लाइल स्कूल ऑफ इंजिनिअरिंग',

      affiliation: 'USA',
      marathiAffiliation: 'अमेरिका',

      photo: dineshRajan
    },

    {
      name: 'Arnav Shah',
      marathiName: 'अर्णव शाह',

      designation: 'Software & Product',
      marathiDesignation: 'सॉफ्टवेअर आणि उत्पादन',

      affiliation: 'Power / Johns Hopkins University, USA',
      marathiAffiliation:
        'पॉवर / जॉन्स हॉपकिन्स युनिव्हर्सिटी, अमेरिका',

      photo: arnavShah
    },

    {
      name: 'Bhagyashri Nivdunge',
      marathiName: 'भाग्यश्री निवडुंगे',

      designation: 'Senior Software Engineer',
      marathiDesignation: 'वरिष्ठ सॉफ्टवेअर अभियंता',

      affiliation: 'Microsoft / University of Washington, USA',
      marathiAffiliation:
        'मायक्रोसॉफ्ट / युनिव्हर्सिटी ऑफ वॉशिंग्टन, अमेरिका',

      photo: bhagyashriNivdunge
    }

  ];

  // =======================================================
  // 3. NATIONAL ADVISORY BOARD
  // =======================================================

  const nationalAdvisory = [

    {
      name: 'Dr. Rushikesh K. Joshi',
      marathiName: 'डॉ. रुशिकेश के. जोशी',

      designation: 'CSE, IIT Bombay',
      marathiDesignation:
        'संगणक विज्ञान व अभियांत्रिकी, आयआयटी बॉम्बे',

      affiliation: 'IIT Bombay',
      marathiAffiliation: 'आयआयटी बॉम्बे',

      photo: rushikeshJoshi
    },

    {
      name: 'Dr. Amay Karkare',
      marathiName: 'डॉ. अमय करकरे',

      designation: 'CSE, IIT Kanpur',
      marathiDesignation:
        'संगणक विज्ञान व अभियांत्रिकी, आयआयटी कानपूर',

      affiliation: 'IIT Kanpur',
      marathiAffiliation: 'आयआयटी कानपूर',

      photo: amayKarkare
    },

    {
      name: 'Prof. Sunil Bhirud',
      marathiName: 'प्रा. सुनील भिरुड',

      designation: 'Vice-Chancellor',
      marathiDesignation: 'कुलगुरू',

      affiliation: 'COEP Technological University, Pune',
      marathiAffiliation:
        'COEP टेक्नॉलॉजिकल युनिव्हर्सिटी, पुणे',

      photo: sunilBhirud
    },

    {
      name: 'Prof. Dr. Laxman D. Netak',
      marathiName: 'प्रा. डॉ. लक्ष्मण डी. नेटके',

      designation: 'Professor & Head, Computer Engineering',
      marathiDesignation:
        'प्राध्यापक व विभागप्रमुख, संगणक अभियांत्रिकी',

      affiliation:
        'Dr. Babasaheb Ambedkar Technological University',

      marathiAffiliation:
        'डॉ. बाबासाहेब आंबेडकर टेक्नॉलॉजिकल युनिव्हर्सिटी',

      photo: laxmanNetak
    },

    {
      name: 'Dr. Padmaja Joshi',
      marathiName: 'डॉ. पद्मजा जोशी',

      designation: 'Scientist G',
      marathiDesignation: 'शास्त्रज्ञ जी',

      affiliation: 'C-DAC, Mumbai',
      marathiAffiliation: 'सी-डॅक, मुंबई',

      photo: padmajaJoshi
    },

    {
      name: 'Dr. Nisha Kurkure',
      marathiName: 'डॉ. निशा कुरकुरे',

      designation: 'Scientist',
      marathiDesignation: 'शास्त्रज्ञ',

      affiliation: 'IISER, Pune',
      marathiAffiliation: 'आयआयएसईआर, पुणे',

      photo: nishaKurkure
    },

    {
      name: 'Dr. Rhushabh Goradia',
      marathiName: 'डॉ. रुशाभ गोराडिया',

      designation: 'Founder',
      marathiDesignation: 'संस्थापक',

      affiliation: 'Synthreads Computing',
      marathiAffiliation: 'सिन्थ्रेड्स कम्प्युटिंग',

      photo: rhushabhGoradia
    },

    {
      name: 'Amit Saxena',
      marathiName: 'अमित सक्सेना',

      designation: 'Scientist-F / Associate Director',
      marathiDesignation: 'शास्त्रज्ञ-एफ / सहयोगी संचालक',

      affiliation: 'C-DAC India',
      marathiAffiliation: 'सी-डॅक, भारत',

      photo: amitSaxena
    },

    {
      name: 'Kunj Tandon',
      marathiName: 'कुंज टंडन',

      designation:
        'CEO, I-Hub Quantum Technologies Foundation',

      marathiDesignation:
        'मुख्य कार्यकारी अधिकारी, आय-हब क्वांटम टेक्नॉलॉजीज फाउंडेशन',

      affiliation: 'Pune, Maharashtra, India',
      marathiAffiliation:
        'पुणे, महाराष्ट्र, भारत',

      photo: kunjTandon
    }

  ];

  // =======================================================
  // 4. TECHNICAL TRACK CHAIRS
  // =======================================================

  const trackChairs = [

    {
      name: 'Dr. S. T. Shingade',
      marathiName: 'डॉ. एस. टी. शिंगाडे',

      track:
        'Applications for High Performance Computing',

      marathiTrack:
        'उच्च कार्यक्षमता संगणनासाठी अनुप्रयोग',

      affiliation: 'VJTI Mumbai',
      marathiAffiliation: 'VJTI मुंबई',

      image: stShingade
    },

    {
      name: 'Dr. S. S. Udmale',
      marathiName: 'डॉ. एस. एस. उडमले',

      track:
        'Artificial Intelligence Systems and Applications',

      marathiTrack:
        'कृत्रिम बुद्धिमत्ता प्रणाली आणि अनुप्रयोग',

      affiliation: 'VJTI Mumbai',
      marathiAffiliation: 'VJTI मुंबई',

      image: ssUdmale
    },

    {
      name: 'Dr. V. B. Nikam',
      marathiName: 'डॉ. व्ही. बी. निकम',

      track:
        'Quantum Computing Systems & Applications',

      marathiTrack:
        'क्वांटम संगणन प्रणाली आणि अनुप्रयोग',

      affiliation: 'VJTI Mumbai',
      marathiAffiliation: 'VJTI मुंबई',

      image: vbNikam
    },

    {
      name: 'Dr. M. R. Shirole',
      marathiName: 'डॉ. एम. आर. शिरोळे',

      track:
        'Optimization Techniques and Intelligent Computing',

      marathiTrack:
        'ऑप्टिमायझेशन तंत्रे आणि बुद्धिमान संगणन',

      affiliation: 'VJTI Mumbai',
      marathiAffiliation: 'VJTI मुंबई',

      image: mrShirole
    },

    {
      name: 'Dr. M. M. Chandane',
      marathiName: 'डॉ. एम. एम. चांदणे',

      track:
        'Sustainable Development through Advanced Computing',

      marathiTrack:
        'प्रगत संगणनाद्वारे शाश्वत विकास',

      affiliation: 'VJTI Mumbai',
      marathiAffiliation: 'VJTI मुंबई',

      image: mmChandane
    }

  ];

  // =======================================================
  // 5. ORGANIZING COMMITTEE
  // =======================================================

  const organizingCommittee = [

    // -------------------------
    // FACULTY
    // -------------------------

    {
      name: 'Prof. P. M. Chawan',
      marathiName: 'प्रा. पी. एम. चव्हाण',

      designation: 'Associate Professor',
      marathiDesignation: 'सहयोगी प्राध्यापक',

      photo: 'pm-chawan.jpg'
    },

    {
      name: 'Prof. S. C. Shrawne',
      marathiName: 'प्रा. एस. सी. श्रावणे',

      designation: 'Assistant Professor',
      marathiDesignation: 'सहाय्यक प्राध्यापक',

      photo: 'sc-shrawne.jpg'
    },

    {
      name: 'Prof. M. U. Kulkarni',
      marathiName: 'प्रा. एम. यू. कुलकर्णी',

      designation: 'Assistant Professor',
      marathiDesignation: 'सहाय्यक प्राध्यापक',

      photo: 'mu-kulkarni.jpg'
    },

    {
      name: 'Dr. Varshapriya N. Jyotinagar',
      marathiName: 'डॉ. वर्षाप्रिया एन. ज्योतिनगर',

      designation: 'Assistant Professor',
      marathiDesignation: 'सहाय्यक प्राध्यापक',

      photo: 'varshapriya-jyotinagar.jpg'
    },

    {
      name: 'Dr. S. S. Suratkar',
      marathiName: 'डॉ. एस. एस. सुरतकर',

      designation: 'Assistant Professor',
      marathiDesignation: 'सहाय्यक प्राध्यापक',

      photo: 'ss-suratkar.jpg'
    },

    {
      name: 'Prof. V. D. Dhore',
      marathiName: 'प्रा. व्ही. डी. धोरे',

      designation: 'Assistant Professor',
      marathiDesignation: 'सहाय्यक प्राध्यापक',

      photo: 'vd-dhore.jpg'
    },

    {
      name: 'Prof. S. A. Khedkar',
      marathiName: 'प्रा. एस. ए. खेडकर',

      designation: 'Assistant Professor',
      marathiDesignation: 'सहाय्यक प्राध्यापक',

      photo: 'sa-khedkar.jpg'
    },

    {
      name: 'Prof. K. K. Joshi',
      marathiName: 'प्रा. के. के. जोशी',

      designation: 'Assistant Professor',
      marathiDesignation: 'सहाय्यक प्राध्यापक',

      photo: null
    },

    {
      name: 'Prof. S. S. Lachure',
      marathiName: 'प्रा. एस. एस. लचुरे',

      designation: 'Assistant Professor',
      marathiDesignation: 'सहाय्यक प्राध्यापक',

      photo: 'ss-lachure.jpg'
    },

    {
      name: 'Dr. V. K. Sambhe',
      marathiName: 'डॉ. व्ही. के. सांभे',

      designation: 'Assistant Professor',
      marathiDesignation: 'सहाय्यक प्राध्यापक',

      photo: 'vk-sambhe.jpg'
    },

    // -------------------------
    // TENURE FACULTY
    // -------------------------

    {
      name: 'Dr. Sopan Govind Kolte',
      marathiName: 'डॉ. सोपान गोविंद कोलते',

      designation: 'Assistant Professor (Tenure)',
      marathiDesignation: 'सहाय्यक प्राध्यापक (टेन्युअर)',

      photo: 'sopan-kolte.jpg'
    },

    {
      name: 'Dr. Noshin Abizer Sabuwala',
      marathiName: 'डॉ. नोशिन अबिझर साबुवाला',

      designation: 'Tenure Faculty',
      marathiDesignation: 'टेन्युअर फॅकल्टी',

      photo: 'noshin-sabuwala.jpg'
    },

    {
      name: 'Dr. Neha Singh',
      marathiName: 'डॉ. नेहा सिंग',

      designation: 'Assistant Professor (Tenure)',
      marathiDesignation: 'सहाय्यक प्राध्यापक (टेन्युअर)',

      photo: 'neha-singh.jpg'
    },

    {
      name: 'Dr. Ritika Singh',
      marathiName: 'डॉ. रितिका सिंग',

      designation: 'Assistant Professor (Tenure)',
      marathiDesignation: 'सहाय्यक प्राध्यापक (टेन्युअर)',

      photo: null
    },

    // -------------------------
    // ADHOC FACULTY
    // -------------------------

    {
      name: 'Mr. Akhil Kulal',
      marathiName: 'श्री. अखिल कुलाल',

      designation: 'Assistant Professor (Adhoc)',
      marathiDesignation: 'सहाय्यक प्राध्यापक (अॅडहॉक)',

      photo: 'akhil-kulal.jpg'
    },

    {
      name: 'Mr. Akshay Mhalaskar',
      marathiName: 'श्री. अक्षय म्हाळासकर',

      designation: 'Assistant Professor (Adhoc)',
      marathiDesignation: 'सहाय्यक प्राध्यापक (अॅडहॉक)',

      photo: 'akshay-mhalaskar.jpg'
    },

    {
      name: 'Ms. Isaivani Mathiyalagan',
      marathiName: 'कु. इसाईवाणी मथियालगन',

      designation: 'Assistant Professor (Adhoc)',
      marathiDesignation: 'सहाय्यक प्राध्यापक (अॅडहॉक)',

      photo: 'isaivani-mathiyalagan.jpg'
    },

    {
      name: 'Ms. Harshala Dalal',
      marathiName: 'कु. हर्षला दलाल',

      designation: 'Assistant Professor (Adhoc)',
      marathiDesignation: 'सहाय्यक प्राध्यापक (अॅडहॉक)',

      photo: null
    },

    {
      name: 'Ms. Prachi Shinde',
      marathiName: 'कु. प्राची शिंदे',

      designation: 'Assistant Professor (Adhoc)',
      marathiDesignation: 'सहाय्यक प्राध्यापक (अॅडहॉक)',

      photo: 'prachi-shinde.jpg'
    },

    {
      name: 'Ms. Pragati Vaishnav',
      marathiName: 'कु. प्रगती वैष्णव',

      designation: 'Assistant Professor (Adhoc)',
      marathiDesignation: 'सहाय्यक प्राध्यापक (अॅडहॉक)',

      photo: 'pragati-vaishnav.jpg'
    },

    {
      name: 'Mr. Saurabh Dalvi',
      marathiName: 'श्री. सौरभ दळवी',

      designation: 'Assistant Professor (Adhoc)',
      marathiDesignation: 'सहाय्यक प्राध्यापक (अॅडहॉक)',

      photo: 'saurabh-dalvi.jpg'
    },

    {
      name: 'Ms. Riddhi Patil',
      marathiName: 'कु. ऋद्धी पाटील',

      designation: 'Assistant Professor (Adhoc)',
      marathiDesignation: 'सहाय्यक प्राध्यापक (अॅडहॉक)',

      photo: null
    },

    {
      name: 'Mr. Mandar K. Sase',
      marathiName: 'श्री. मंदार के. ससे',

      designation: 'Assistant Professor (Adhoc)',
      marathiDesignation: 'सहाय्यक प्राध्यापक (अॅडहॉक)',

      photo: 'mandar-sase.jpg'
    },

    {
      name: 'Ms. Prajkta Salunkhe',
      marathiName: 'कु. प्राजक्ता साळुंखे',

      designation: 'Assistant Professor (Adhoc)',
      marathiDesignation: 'सहाय्यक प्राध्यापक (अॅडहॉक)',

      photo: 'prajkta-salunkhe.jpg'
    },

    {
      name: 'Mr. Ankit Nimbolkar',
      marathiName: 'श्री. अंकित निंबोळकर',

      designation: 'Assistant Professor (Adhoc)',
      marathiDesignation: 'सहाय्यक प्राध्यापक (अॅडहॉक)',

      photo: 'ankit-nimbolkar.jpg'
    }

  ];

  // =======================================================
  // 6. SUPPORT TEAM
  // =======================================================

  const supportTeam = [

    {
      name: 'Mr. Omkar Moraye',
      marathiName: 'श्री. ओंकार मोरये',

      designation: 'System Engineer',
      marathiDesignation: 'सिस्टम इंजिनिअर',

      role: 'System Engineering & Technical Support',
      marathiRole: 'सिस्टम अभियांत्रिकी आणि तांत्रिक सहाय्य',

      photo: null
    },
    {
      name: 'Miss. Pooja Chirke',
      marathiName: 'कु.पुजा चिरके',

      designation: 'Teaching Assistant',
      marathiDesignation: 'अध्यापन सहाय्यक',

      role: 'Conference Coordination & Technical Support',
      marathiRole: 'परिषद समन्वय आणि तांत्रिक सहाय्य',

      photo: null
    },

    {
      name: 'Mr. Pratik Desai',
      marathiName: 'श्री. प्रतीक देसाई',

      designation: 'Teaching Assistant',
      marathiDesignation: 'अध्यापन सहाय्यक',

      role: 'Technical & Academic Support',
      marathiRole: 'तांत्रिक आणि शैक्षणिक सहाय्य',

      photo: null
    },

    {
      name: 'Miss. Pooja Chirke',
      marathiName: 'कु.पुजा चिरके',

      designation: 'Teaching Assistant',
      marathiDesignation: 'अध्यापन सहाय्यक',

      role: 'Conference Coordination & Technical Support',
      marathiRole: 'परिषद समन्वय आणि तांत्रिक सहाय्य',

      photo: null
    },

    {
      name: 'Miss. Samrudhi',
      marathiName: 'कु. समृद्धी',

      designation: 'Teaching Assistant',
      marathiDesignation: 'अध्यापन सहाय्यक',

      role: 'Documentation & Coordination Support',
      marathiRole: 'दस्तऐवजीकरण आणि समन्वय सहाय्य',

      photo: null
    }

  ];

  // =======================================================
  // PERSON CARD
  // =======================================================

  const renderPersonCards = (members) => {

    return members.map((member, idx) => {

      const image = getOrganizingPhoto(member.photo);

      return (

        <div
          className="committee-grid-item"
          key={idx}
        >

          <div className="card border-0 shadow-sm rounded-4 bg-white h-100 committee-card">

            <div className="card-body text-center p-3">

              {/* PHOTO */}

              <div className="committee-photo">

                {image ? (
                  <img
                    src={image}
                    alt={member.name}
                    loading="lazy"
                  />
                ) : (
                  <i
                    className="bi bi-person-fill"
                    aria-hidden="true"
                  ></i>
                )}

              </div>

              {/* ENGLISH NAME */}

              <h6 className="committee-name">
                {member.name}
              </h6>

              {/* MARATHI NAME */}

              {member.marathiName && (
                <div className="committee-marathi-name">
                  {member.marathiName}
                </div>
              )}

              {/* ENGLISH DESIGNATION */}

              {member.designation && (
                <div className="committee-designation">
                  {member.designation}
                </div>
              )}

              {/* MARATHI DESIGNATION */}

              {member.marathiDesignation && (
                <div className="committee-marathi-designation">
                  {member.marathiDesignation}
                </div>
              )}

            </div>

          </div>

        </div>

      );

    });

  };

  // =======================================================
  // ADVISORY / SUPPORT CARD
  // =======================================================

  const renderSmallCards = (members) => {

    return members.map((member, idx) => {

      /*
       * Advisory Board:
       * photo is directly imported.
       *
       * Support Team:
       * photo is null.
       *
       * Therefore missing photo automatically
       * displays the Bootstrap person icon.
       */

      const image = member.photo || null;

      return (

        <div
          className="committee-grid-item"
          key={idx}
        >

          <div className="card border-0 shadow-sm rounded-4 bg-white h-100 committee-card">

            <div className="card-body text-center p-3">

              {/* =========================================
                  PHOTO
              ========================================= */}

              <div className="committee-photo">

                {image ? (
                  <img
                    src={image}
                    alt={member.name}
                    loading="lazy"
                  />
                ) : (
                  <i
                    className="bi bi-person-fill"
                    aria-hidden="true"
                  ></i>
                )}

              </div>

              {/* =========================================
                  ENGLISH NAME
              ========================================= */}

              <h6 className="committee-name">
                {member.name}
              </h6>

              {/* =========================================
                  MARATHI NAME
              ========================================= */}

              {member.marathiName && (
                <div className="committee-marathi-name">
                  {member.marathiName}
                </div>
              )}

              {/* =========================================
                  ENGLISH DESIGNATION
              ========================================= */}

              {member.designation && (
                <div className="committee-designation">
                  {member.designation}
                </div>
              )}

              {/* =========================================
                  MARATHI DESIGNATION
              ========================================= */}

              {member.marathiDesignation && (
                <div className="committee-marathi-designation">
                  {member.marathiDesignation}
                </div>
              )}

              {/* =========================================
                  ENGLISH AFFILIATION
              ========================================= */}

              {member.affiliation && (
                <div className="committee-affiliation">
                  {member.affiliation}
                </div>
              )}

              {/* =========================================
                  MARATHI AFFILIATION
              ========================================= */}

              {member.marathiAffiliation && (
                <div className="committee-marathi-affiliation">
                  {member.marathiAffiliation}
                </div>
              )}

              {/* =========================================
                  ENGLISH ROLE
              ========================================= */}

              {member.role && (
                <div className="committee-affiliation">
                  {member.role}
                </div>
              )}

              {/* =========================================
                  MARATHI ROLE
              ========================================= */}

              {member.marathiRole && (
                <div className="committee-marathi-affiliation">
                  {member.marathiRole}
                </div>
              )}

            </div>

          </div>

        </div>

      );

    });

  };

  // =======================================================
  // MAIN RETURN
  // =======================================================

  return (

    <MainLayout

      title={
        <>

          Organizing Committee & Advisory Board

          <div
            style={{
              ...marathiFont,
              fontSize: '32px',
              lineHeight: '1.6',
              marginTop: '8px',
              color: '#ffffff'
            }}
          >
            आयोजन समिती आणि सल्लागार मंडळ
          </div>

        </>
      }

      subtitle={
        <>

          <div>
            Chief Patrons, International & National Advisory Boards,
            Technical Track Chairs, Organizing Committee & Support Team
          </div>

          <div
            style={{
              ...marathiFont,
              fontSize: '18px',
              lineHeight: '1.9',
              marginTop: '12px',
              color: 'rgba(255,255,255,0.75)'
            }}
          >
            मुख्य संरक्षक, आंतरराष्ट्रीय व राष्ट्रीय सल्लागार मंडळे,
            तांत्रिक ट्रॅक चेअर्स, आयोजन समिती आणि सहाय्यक पथक
          </div>

        </>
      }

      badge={
        <>

          <span>
            CONFERENCE LEADERSHIP
          </span>

          <span
            style={{
              ...marathiFont,
              marginLeft: '12px'
            }}
          >
            परिषदेचे नेतृत्व
          </span>

        </>
      }

    >

      {/* =====================================================
          1. CHIEF PATRONS
      ====================================================== */}

      <section className="mb-5">

        <div className="text-center mb-4">

          <h3 className="fw-bold font-heading text-vjti-maroon mb-2">
            Chief Patrons
          </h3>

          <h5
            style={{
              ...marathiFont,
              color: '#6f42c1',
              fontWeight: '700'
            }}
          >
            मुख्य संरक्षक
          </h5>

        </div>

        <div className="committee-grid">

          {patrons.map((p, idx) => (

            <div
              className="committee-grid-item"
              key={idx}
            >

              <div className="card border-0 shadow-sm rounded-4 bg-white text-center h-100 committee-card">

                <div className="card-body p-3">

                  {/* PHOTO */}

                  <div className="large-committee-photo">

                    {p.image ? (
                      <img
                        src={p.image}
                        alt={p.name}
                        loading="lazy"
                      />
                    ) : (
                      <i
                        className="bi bi-person-fill"
                        aria-hidden="true"
                      ></i>
                    )}

                  </div>

                  {/* ENGLISH ROLE */}

                  <span className="badge bg-vjti-gold text-dark font-monospace mb-2">
                    {p.role}
                  </span>

                  {/* MARATHI ROLE */}

                  <div
                    className="mb-2"
                    style={{
                      ...marathiFont,
                      color: '#6f42c1',
                      fontWeight: '600',
                      fontSize: '12px'
                    }}
                  >
                    {p.marathiRole}
                  </div>

                  {/* ENGLISH NAME */}

                  <h5 className="fw-bold text-dark mb-1">
                    {p.name}
                  </h5>

                  {/* MARATHI NAME */}

                  <h6
                    className="fw-bold mb-2"
                    style={{
                      ...marathiFont,
                      color: '#6f42c1',
                      fontSize: '13px'
                    }}
                  >
                    {p.marathiName}
                  </h6>

                  {/* ENGLISH TITLE */}

                  <p className="text-muted small mb-1">
                    {p.title}
                  </p>

                  {/* MARATHI TITLE */}

                  <p
                    className="text-muted small mb-0"
                    style={{
                      ...marathiFont,
                      lineHeight: '1.6'
                    }}
                  >
                    {p.marathiTitle}
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* =====================================================
          2. INTERNATIONAL ADVISORY BOARD
      ====================================================== */}

      <section className="mb-5">

        <div className="text-center mb-4">

          <h3 className="fw-bold font-heading text-vjti-maroon mb-2">
            International Advisory Board
          </h3>

          <h5
            style={{
              ...marathiFont,
              color: '#6f42c1',
              fontWeight: '700'
            }}
          >
            आंतरराष्ट्रीय सल्लागार मंडळ
          </h5>

          <p className="text-muted small mt-2 mb-1">
            Distinguished international experts supporting HOC 2027.
          </p>

          <p
            className="text-muted small"
            style={{
              ...marathiFont,
              lineHeight: '1.7'
            }}
          >
            SAQC २०२७ ला मार्गदर्शन करणारे प्रतिष्ठित आंतरराष्ट्रीय तज्ज्ञ.
          </p>

        </div>

        <div className="committee-grid">

          {renderSmallCards(internationalAdvisory)}

        </div>

      </section>

      {/* =====================================================
          3. NATIONAL ADVISORY BOARD
      ====================================================== */}

      <section className="mb-5">

        <div className="text-center mb-4">

          <h3 className="fw-bold font-heading text-vjti-maroon mb-2">
            National Advisory Board
          </h3>

          <h5
            style={{
              ...marathiFont,
              color: '#6f42c1',
              fontWeight: '700'
            }}
          >
            राष्ट्रीय सल्लागार मंडळ
          </h5>

          <p className="text-muted small mt-2 mb-1">
            Eminent academic, research and industry leaders from India.
          </p>

          <p
            className="text-muted small"
            style={{
              ...marathiFont,
              lineHeight: '1.7'
            }}
          >
            भारतातील प्रतिष्ठित शैक्षणिक, संशोधन आणि उद्योग क्षेत्रातील
            मान्यवरांचे मार्गदर्शन.
          </p>

        </div>

        <div className="committee-grid">

          {renderSmallCards(nationalAdvisory)}

        </div>

      </section>

      {/* =====================================================
          4. TECHNICAL TRACK CHAIRS
      ====================================================== */}

      <section className="mb-5">

        <div className="text-center mb-4">

          <h3 className="fw-bold font-heading text-vjti-maroon mb-2">
            Technical Track Chairs
          </h3>

          <h5
            style={{
              ...marathiFont,
              color: '#6f42c1',
              fontWeight: '700'
            }}
          >
            तांत्रिक ट्रॅक चेअर्स
          </h5>

          <p className="text-muted small mt-2 mb-1">
            Technical leadership for the five major conference tracks.
          </p>

          <p
            className="text-muted small"
            style={{
              ...marathiFont,
              lineHeight: '1.7'
            }}
          >
            परिषदेच्या पाच प्रमुख तांत्रिक ट्रॅकचे नेतृत्व करणारे
            तांत्रिक प्रमुख.
          </p>

        </div>

        <div className="committee-grid">

          {trackChairs.map((tc, idx) => (

            <div
              className="committee-grid-item"
              key={idx}
            >

              <div className="card border-0 shadow-sm rounded-4 bg-light text-center h-100 committee-card">

                <div className="card-body p-3">

                  {/* PHOTO */}

                  <div className="track-chair-photo">

                    {tc.image ? (
                      <img
                        src={tc.image}
                        alt={tc.name}
                        loading="lazy"
                      />
                    ) : (
                      <i
                        className="bi bi-person-fill"
                        aria-hidden="true"
                      ></i>
                    )}

                  </div>

                  {/* ENGLISH NAME */}

                  <h5 className="fw-bold text-dark mb-1">
                    {tc.name}
                  </h5>

                  {/* MARATHI NAME */}

                  <div
                    className="mb-2"
                    style={{
                      ...marathiFont,
                      color: '#6f42c1',
                      fontWeight: '600',
                      fontSize: '12px'
                    }}
                  >
                    {tc.marathiName}
                  </div>

                  {/* ENGLISH TRACK */}

                  <div className="small text-vjti-maroon fw-semibold mb-2">
                    {tc.track}
                  </div>

                  {/* MARATHI TRACK */}

                  <div
                    className="small mb-2"
                    style={{
                      ...marathiFont,
                      color: '#6f42c1',
                      lineHeight: '1.6'
                    }}
                  >
                    {tc.marathiTrack}
                  </div>

                  {/* ENGLISH AFFILIATION */}

                  <span className="badge bg-white text-dark border small">
                    {tc.affiliation}
                  </span>

                  {/* MARATHI AFFILIATION */}

                  <div
                    className="small mt-2"
                    style={{
                      ...marathiFont,
                      color: '#6f42c1'
                    }}
                  >
                    {tc.marathiAffiliation}
                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* =====================================================
          5. ORGANIZING COMMITTEE
      ====================================================== */}

      <section className="mb-5">

        <div className="text-center mb-4">

          <h3 className="fw-bold font-heading text-vjti-maroon mb-2">
            Organizing Committee
          </h3>

          <h5
            style={{
              ...marathiFont,
              color: '#6f42c1',
              fontWeight: '700'
            }}
          >
            आयोजन समिती
          </h5>

          <p className="text-muted small mt-3 mb-1">
            Department of Computer Engineering & Information Technology
          </p>

          <p
            className="text-muted small"
            style={{
              ...marathiFont,
              lineHeight: '1.8'
            }}
          >
            संगणक अभियांत्रिकी आणि माहिती तंत्रज्ञान विभाग
          </p>

        </div>

        <div className="committee-grid">

          {renderPersonCards(organizingCommittee)}

        </div>

      </section>

      {/* =====================================================
          6. SUPPORT TEAM
      ====================================================== */}

      <section className="mb-5">

        <div className="text-center mb-4">

          <h3 className="fw-bold font-heading text-vjti-maroon mb-2">
            Support Team
          </h3>

          <h5
            style={{
              ...marathiFont,
              color: '#6f42c1',
              fontWeight: '700'
            }}
          >
            सहाय्यक पथक
          </h5>

          <p className="text-muted small mt-2 mb-1">
            Technical, academic, coordination and documentation support.
          </p>

          <p
            className="text-muted small"
            style={{
              ...marathiFont,
              lineHeight: '1.7'
            }}
          >
            तांत्रिक, शैक्षणिक, समन्वय आणि दस्तऐवजीकरणासाठी सहाय्य करणारे पथक.
          </p>

        </div>

        <div className="committee-grid">

          {renderSmallCards(supportTeam)}

        </div>

      </section>

      {/* =====================================================
          CONFERENCE LEADERSHIP NOTE
      ====================================================== */}

      <section className="bg-vjti-navy text-white rounded-4 p-5 text-center shadow-sm mb-4">

        <h3 className="fw-bold font-heading text-white mb-2">
          Conference Leadership
        </h3>

        <h5
          className="fw-bold text-vjti-gold mb-3"
          style={{
            ...marathiFont,
            lineHeight: '1.8'
          }}
        >
          परिषदेचे नेतृत्व
        </h5>

        <p className="text-white-50 mb-2">
          The conference leadership team is committed to conducting
          SAQC 2027 with academic excellence, research integrity and
          professional standards.
        </p>

        <p
          className="text-white-50 mb-0"
          style={{
            ...marathiFont,
            lineHeight: '1.9'
          }}
        >
          परिषद नेतृत्व SAQC २०२७ चे आयोजन शैक्षणिक उत्कृष्टता,
          संशोधनाची सचोटी आणि व्यावसायिक मानकांसह करण्यासाठी कटिबद्ध आहे.
        </p>

      </section>

      {/* =====================================================
          PAGE SPECIFIC CSS
      ====================================================== */}

      <style>{`

        /* ================================================
           COMMON 5-COLUMN GRID
        ================================================ */

        .committee-grid {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 18px;
          align-items: stretch;
        }

        .committee-grid-item {
          min-width: 0;
        }

        /* ================================================
           CARD
        ================================================ */

        .committee-card {
          transition:
            transform 0.2s ease,
            box-shadow 0.2s ease;
        }

        .committee-card:hover {
          transform: translateY(-4px);

          box-shadow:
            0 8px 24px rgba(0, 0, 0, 0.12) !important;
        }

        /* ================================================
           NORMAL PHOTO
        ================================================ */

        .committee-photo {
          width: 68px;
          height: 68px;

          margin: 0 auto 12px;

          border-radius: 50%;
          overflow: hidden;

          border: 3px solid #800000;

          box-shadow:
            0 3px 10px rgba(0, 0, 0, 0.12);

          background: #f4f1f8;

          display: flex;
          align-items: center;
          justify-content: center;
        }

        .committee-photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .committee-photo i {
          font-size: 34px;
          color: #800000;
        }

        /* ================================================
           NAME
        ================================================ */

        .committee-name {
          font-size: 14px;
          line-height: 1.35;
          font-weight: 700;

          color: #212529;

          margin-bottom: 4px;
        }

        /* ================================================
           MARATHI NAME
        ================================================ */

        .committee-marathi-name {
          font-family:
            'Mangal',
            'Noto Sans Devanagari',
            'Mukta',
            'Hind',
            sans-serif;

          color: #6f42c1;

          font-size: 12px;
          font-weight: 600;

          line-height: 1.4;

          margin-bottom: 6px;
        }

        /* ================================================
           DESIGNATION
        ================================================ */

        .committee-designation {
          color: #800000;

          font-size: 11px;
          font-weight: 600;

          line-height: 1.35;
        }

        /* ================================================
           MARATHI DESIGNATION
        ================================================ */

        .committee-marathi-designation {
          font-family:
            'Mangal',
            'Noto Sans Devanagari',
            'Mukta',
            'Hind',
            sans-serif;

          color: #6f42c1;

          font-size: 11px;

          line-height: 1.45;

          margin-top: 2px;
        }

        /* ================================================
           AFFILIATION
        ================================================ */

        .committee-affiliation {
          color: #6c757d;

          font-size: 10px;

          line-height: 1.4;

          margin-top: 6px;
        }

        /* ================================================
           MARATHI AFFILIATION / ROLE
        ================================================ */

        .committee-marathi-affiliation {
          font-family:
            'Mangal',
            'Noto Sans Devanagari',
            'Mukta',
            'Hind',
            sans-serif;

          color: #6f42c1;

          font-size: 10px;

          line-height: 1.5;

          margin-top: 3px;
        }

        /* ================================================
           CHIEF PATRON PHOTO
        ================================================ */

        .large-committee-photo {
          width: 120px;
          height: 120px;

          margin: 0 auto 16px;

          border-radius: 50%;
          overflow: hidden;

          border: 4px solid #800000;

          box-shadow:
            0 5px 18px rgba(0, 0, 0, 0.15);

          background: #f4f1f8;

          display: flex;
          align-items: center;
          justify-content: center;
        }

        .large-committee-photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .large-committee-photo i {
          font-size: 55px;
          color: #800000;
        }

        /* ================================================
           TECHNICAL TRACK CHAIR PHOTO
        ================================================ */

        .track-chair-photo {
          width: 100px;
          height: 100px;

          margin: 0 auto 16px;

          border-radius: 50%;
          overflow: hidden;

          border: 4px solid #800000;

          box-shadow:
            0 4px 14px rgba(0, 0, 0, 0.15);

          background: #f4f1f8;

          display: flex;
          align-items: center;
          justify-content: center;
        }

        .track-chair-photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .track-chair-photo i {
          font-size: 45px;
          color: #800000;
        }

        /* ================================================
           LARGE DESKTOP
           5 CARDS PER ROW
        ================================================ */

        @media (min-width: 1201px) {

          .committee-grid {
            grid-template-columns:
              repeat(5, minmax(0, 1fr));
          }

        }

        /* ================================================
           LAPTOP
           4 CARDS PER ROW
        ================================================ */

        @media (max-width: 1200px) {

          .committee-grid {
            grid-template-columns:
              repeat(4, minmax(0, 1fr));
          }

        }

        /* ================================================
           TABLET
           3 CARDS PER ROW
        ================================================ */

        @media (max-width: 992px) {

          .committee-grid {
            grid-template-columns:
              repeat(3, minmax(0, 1fr));
          }

        }

        /* ================================================
           SMALL TABLET
           2 CARDS PER ROW
        ================================================ */

        @media (max-width: 768px) {

          .committee-grid {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));

            gap: 14px;
          }

        }

        /* ================================================
           MOBILE
           1 CARD PER ROW
        ================================================ */

        @media (max-width: 576px) {

          .committee-grid {
            grid-template-columns: 1fr;

            gap: 14px;
          }

          .committee-name {
            font-size: 13px;
          }

          .committee-marathi-name {
            font-size: 11px;
          }

          .committee-designation {
            font-size: 10px;
          }

          .committee-marathi-designation {
            font-size: 10px;
          }

          .large-committee-photo {
            width: 105px;
            height: 105px;
          }

          .track-chair-photo {
            width: 90px;
            height: 90px;
          }

        }

      `}</style>

    </MainLayout>

  );

};

export default CommitteePage;