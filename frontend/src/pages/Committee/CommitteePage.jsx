import React from 'react';
import MainLayout from '../../layouts/MainLayout';


// =========================================================
// CHIEF PATRONS
// =========================================================

import sunilLuthra from '../../assets/committee/Sunil-luthra.jpg';
import sudhirMehta from '../../assets/committee/sudhir-mehta.jpg';
import sdKore from '../../assets/committee/sd-kore.jpg';
import venugopalReddy from '../../assets/committee/b-venugopal-reddy.jpg';
import pramodNaik from '../../assets/committee/pramod-naik.jpg';

// =========================================================
// PATRONS
// =========================================================

import kkSangle from '../../assets/committee/patrons/kksangle.jpg';
import anBambole from '../../assets/committee/patrons/anbambole.jpg';
import saMastud from '../../assets/committee/patrons/saMastud.jpg';
import avDeshpande from '../../assets/committee/patrons/avdeshpande.jpg';
import wsRathod from '../../assets/committee/patrons/wsrathod.jpg';
import vmPhalle from '../../assets/committee/patrons/vmphalle.jpg';
import syMhaske from '../../assets/committee/patrons/symhaske.jpg';
import rsKadge from '../../assets/committee/patrons/rskadge.jpg';
import asWayal from '../../assets/committee/patrons/aswayal.jpg';
import ssPendhari from '../../assets/committee/patrons/sspendhari.jpg';
import suranjanaGangopadhyay from '../../assets/committee/patrons/suranjanagangopadhyay.jpg';
import npGulhane from '../../assets/committee/patrons/npgulhane.jpg';

// IMPORTANT:
// This is a different image from the organizing committee image.
import patronMrShirole from '../../assets/committee/patrons/mrshirole.jpg';

// =========================================================
// INTERNATIONAL ADVISORY BOARD
// =========================================================

import jyotikaAthavale from '../../assets/committee/international-advisory/jyotika-athavale.jpg';
import dineshRajan from '../../assets/committee/international-advisory/dinesh-rajan.jpg';
import arnavShah from '../../assets/committee/international-advisory/arnav-shah.jpg';
import bhagyashriNivdunge from '../../assets/committee/international-advisory/bhagyashri-nivdunge.jpg';
import gauriJoshi from '../../assets/committee/international-advisory/GauriJoshi.jpg';
import crehanSanthumayor from '../../assets/committee/international-advisory/crehanSanthumayor.jpg';

// =========================================================
// NATIONAL ADVISORY BOARD
// =========================================================

import amayKarkare from '../../assets/committee/national-advisory/amay-karkare.jpg';
import amitSaxena from '../../assets/committee/national-advisory/amit-saxena.jpg';
import kunjTandon from '../../assets/committee/national-advisory/kunj-tandon.jpg';
import laxmanNetak from '../../assets/committee/national-advisory/laxman-netak.jpg';
import nishaKurkure from '../../assets/committee/national-advisory/nisha-kurkure.jpg';
import padmajaJoshi from '../../assets/committee/national-advisory/padmaja-joshi.jpg';
import rhushabhGoradia from '../../assets/committee/national-advisory/rhushabh-goradia.jpg';
import sunilBhirud from '../../assets/committee/national-advisory/sunil-bhirud.jpg';
import lakshmiDatarPanat from '../../assets/committee/national-advisory/lakshmiDatarPanat.jpg';
import ssBhat from '../../assets/committee/national-advisory/Dr_S_S_Bhat.jpg';

// =========================================================
// ORGANIZING COMMITTEE SPECIAL PHOTOS
// =========================================================

import ssUdmale from '../../assets/committee/ss-udmale.jpg';
import mrShirole from '../../assets/committee/mr-shirole.jpg';
import mmChandane from '../../assets/committee/mm-chandane.jpg';

// =========================================================
// SUPPORT TEAM PHOTOS
// =========================================================

import poojaChirke from '../../assets/committee/support-team/pooja-chirke.jpg';


// =========================================================
// ORGANIZING COMMITTEE DYNAMIC PHOTOS
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

  const chiefPatrons = [
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
  // 2. PATRONS
  // =======================================================
  const patrons = [
    {
      name: 'Dr. K. K. Sangle',
      marathiName: 'डॉ. के. के. सांगळे',
      designation:
        'Deputy Director (Students, Academics, Finance and Administration)',
      marathiDesignation:
        'उपसंचालक (विद्यार्थी, शैक्षणिक, वित्त व प्रशासन)',
      affiliation: 'VJTI, Mumbai',
      marathiAffiliation: 'व्हीजेटीआय, मुंबई',
      photo: kkSangle
    },

    {
      name: 'Dr. A. N. Bambole',
      marathiName: 'डॉ. ए. एन. बांबोले',
      designation:
        'Deputy Director (Infrastructure, Faculty Welfare, Research & Consultancy)',
      marathiDesignation:
        'उपसंचालक (पायाभूत सुविधा, प्राध्यापक कल्याण, संशोधन व सल्लागार सेवा)',
      affiliation: 'VJTI, Mumbai',
      marathiAffiliation: 'व्हीजेटीआय, मुंबई',
      photo: anBambole
    },

    {
      name: 'Dr. S. A. Mastud',
      marathiName: 'डॉ. एस. ए. मस्तुड',
      designation: 'Registrar',
      marathiDesignation: 'कुलसचिव',
      affiliation: 'VJTI, Mumbai',
      marathiAffiliation: 'व्हीजेटीआय, मुंबई',
      photo: saMastud
    },

    {
      name: 'Dr. A. V. Deshpande',
      marathiName: 'डॉ. ए. व्ही. देशपांडे',
      designation: 'Dean Academic Programmes',
      marathiDesignation: 'अधिष्ठाता, शैक्षणिक कार्यक्रम',
      affiliation: 'VJTI, Mumbai',
      marathiAffiliation: 'व्हीजेटीआय, मुंबई',
      photo: avDeshpande
    },

    {
      name: 'Dr. W. S. Rathod',
      marathiName: 'डॉ. डब्ल्यू. एस. राठोड',
      designation: 'Dean Faculty Welfare',
      marathiDesignation: 'अधिष्ठाता, प्राध्यापक कल्याण',
      affiliation: 'VJTI, Mumbai',
      marathiAffiliation: 'व्हीजेटीआय, मुंबई',
      photo: wsRathod
    },

    {
      name: 'Dr. V. M. Phalle',
      marathiName: 'डॉ. व्ही. एम. फाळे',
      designation: 'Dean Research, Development and Consultancy',
      marathiDesignation: 'अधिष्ठाता, संशोधन, विकास व सल्लागार सेवा',
      affiliation: 'VJTI, Mumbai',
      marathiAffiliation: 'व्हीजेटीआय, मुंबई',
      photo: vmPhalle
    },

    {
      name: 'Dr. S. Y. Mhaske',
      marathiName: 'डॉ. एस. वाय. म्हास्के',
      designation: 'Dean Infrastructure & Maintenance',
      marathiDesignation: 'अधिष्ठाता, पायाभूत सुविधा व देखभाल',
      affiliation: 'VJTI, Mumbai',
      marathiAffiliation: 'व्हीजेटीआय, मुंबई',
      photo: syMhaske
    },

    {
      name: 'Dr. R. S. Kadge',
      marathiName: 'डॉ. आर. एस. कडगे',
      designation: 'Dean Diploma Programmes',
      marathiDesignation: 'अधिष्ठाता, डिप्लोमा कार्यक्रम',
      affiliation: 'VJTI, Mumbai',
      marathiAffiliation: 'व्हीजेटीआय, मुंबई',
      photo: rsKadge
    },

    {
      name: 'Dr. A. S. Wayal',
      marathiName: 'डॉ. ए. एस. वायाळ',
      designation: 'Dean Quality',
      marathiDesignation: 'अधिष्ठाता, गुणवत्ता',
      affiliation: 'VJTI, Mumbai',
      marathiAffiliation: 'व्हीजेटीआय, मुंबई',
      photo: asWayal
    },

    {
      name: 'Dr. S. S. Pendhari',
      marathiName: 'डॉ. एस. एस. पेंढारी',
      designation: 'Dean Infrastructure (New Projects)',
      marathiDesignation: 'अधिष्ठाता, पायाभूत सुविधा (नवीन प्रकल्प)',
      affiliation: 'VJTI, Mumbai',
      marathiAffiliation: 'व्हीजेटीआय, मुंबई',
      photo: ssPendhari
    },

    {
      name: 'Dr. Suranjana Gangopadhyay',
      marathiName: 'डॉ. सुरंजना गांगोपाध्याय',
      designation: 'Dean Student Affairs',
      marathiDesignation: 'अधिष्ठाता, विद्यार्थी व्यवहार',
      affiliation: 'VJTI, Mumbai',
      marathiAffiliation: 'व्हीजेटीआय, मुंबई',
      photo: suranjanaGangopadhyay
    },

    {
      name: 'Dr. N. P. Gulhane',
      marathiName: 'डॉ. एन. पी. गुल्हाणे',
      designation:
        'Dean Placement, Corporate, Alumni & International Relations',
      marathiDesignation:
        'अधिष्ठाता, प्लेसमेंट, कॉर्पोरेट, माजी विद्यार्थी व आंतरराष्ट्रीय संबंध',
      affiliation: 'VJTI, Mumbai',
      marathiAffiliation: 'व्हीजेटीआय, मुंबई',
      photo: npGulhane
    },

    {
      name: 'Dr. M. R. Shirole',
      marathiName: 'डॉ. एम. आर. शिरोळे',
      designation: 'Dean IT Infrastructure',
      marathiDesignation: 'अधिष्ठाता, आयटी पायाभूत सुविधा',
      affiliation: 'VJTI, Mumbai',
      marathiAffiliation: 'व्हीजेटीआय, मुंबई',
      photo: mrShirole
    }
  ];
  // =======================================================
  // 3. INTERNATIONAL ADVISORY BOARD
  // =======================================================

  const internationalAdvisory = [
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
      name: 'Dr. Jyotika Athavale',
      marathiName: 'डॉ. ज्योतिका आठवले',
      designation: 'IEEE CS President-Elect',
      marathiDesignation: 'IEEE CS अध्यक्ष-नियुक्त',
      affiliation: 'USA',
      marathiAffiliation: 'अमेरिका',
      photo: jyotikaAthavale
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
    },
    {
      name: 'Gauri Joshi',
      marathiName: 'गौरी जोशी',
      designation: 'Backend Engineer',
      marathiDesignation: 'बॅकएंड अभियंता',
      affiliation: 'Microsoft / University of San Francisco, USA',
      marathiAffiliation:
        'मायक्रोसॉफ्ट / युनिव्हर्सिटी ऑफ सॅन फ्रान्सिस्को, अमेरिका',
      photo: gauriJoshi
    },
    {
      name: 'Crehan Santhumayor',
      marathiName: 'क्रेहान संथुमयोर',
      designation: 'Software Engineer',
      marathiDesignation: 'सॉफ्टवेअर अभियंता',
      affiliation: 'Amazon Prime Video, California, USA',
      marathiAffiliation: 'अॅमेझॉन प्राइम व्हिडिओ, कॅलिफोर्निया, अमेरिका',
      photo: crehanSanthumayor
    }

  ];

  // =======================================================
  // 3. NATIONAL ADVISORY BOARD
  // =======================================================

  const nationalAdvisory = [


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
      name: 'Kunj Tandon',
      marathiName: 'कुंज टंडन',
      designation:
        'CEO, I-Hub Quantum Technologies Foundation',
      marathiDesignation:
        'मुख्य कार्यकारी अधिकारी, आय-हब क्वांटम टेक्नॉलॉजीज फाउंडेशन',
      affiliation: 'Pune, Maharashtra, India',
      marathiAffiliation: 'पुणे, महाराष्ट्र, भारत',
      photo: kunjTandon
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
      name: 'Dr. S. S. Bhat',
      marathiName: 'डॉ. एस. एस. भट',
      designation: 'Professor, Electrical Engineering',
      marathiDesignation: 'प्राध्यापक, विद्युत अभियांत्रिकी',
      affiliation: 'VNIT Nagpur',
      marathiAffiliation: 'व्हीएनआयटी, नागपूर',
      photo: ssBhat
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
      name: 'Lakshmi Datar Panat',
      marathiName: 'लक्ष्मी दातार पणत',
      designation: 'Researcher',
      marathiDesignation: 'संशोधक',
      affiliation: 'Centre for Development of Advanced Computing (C-DAC), Pune',
      marathiAffiliation: 'सेंटर फॉर डेव्हलपमेंट ऑफ अॅडव्हान्स्ड कम्प्युटिंग (C-DAC), पुणे',
      photo: lakshmiDatarPanat
    },

    {
      name: 'Amit Saxena',
      marathiName: 'अमित सक्सेना',
      designation: 'Scientist-F / Associate Director',
      marathiDesignation:
        'शास्त्रज्ञ-एफ / सहयोगी संचालक',
      affiliation: 'C-DAC India',
      marathiAffiliation: 'सी-डॅक, भारत',
      photo: amitSaxena
    },

    {
      name: 'Prof. Dr. Laxman D. Netak',
      marathiName: 'प्रा. डॉ. लक्ष्मण डी. नेटके',
      designation:
        'Professor & Head, Computer Engineering',
      marathiDesignation:
        'प्राध्यापक व विभागप्रमुख, संगणक अभियांत्रिकी',
      affiliation:
        'Dr. Babasaheb Ambedkar Technological University',
      marathiAffiliation:
        'डॉ. बाबासाहेब आंबेडकर टेक्नॉलॉजिकल युनिव्हर्सिटी',
      photo: laxmanNetak
    }


  ];

  // =======================================================
  // 4. ORGANIZING COMMITTEE
  // =======================================================
  //
  // Udmale, Shirole, Chandane included.
  // Shingade and V. B. Nikam removed.
  // =======================================================

  const organizingCommittee = [

    // -------------------------
    // SENIOR FACULTY
    // -------------------------

    {
      name: 'Prof. P. M. Chawan',
      marathiName: 'प्रा. पी. एम. चव्हाण',
      designation: 'Associate Professor',
      marathiDesignation: 'सहयोगी प्राध्यापक',
      photo: 'pm-chawan.jpg'
    },
    {
      name: 'Dr. M. R. Shirole',
      marathiName: 'डॉ. एम. आर. शिरोळे',
      designation: 'Assistant Professor',
      marathiDesignation: 'सहाय्यक प्राध्यापक',
      image: mrShirole
    },

    {
      name: 'Dr. M. M. Chandane',
      marathiName: 'डॉ. एम. एम. चांदणे',
      designation: 'Assistant Professor',
      marathiDesignation: 'सहाय्यक प्राध्यापक',
      image: mmChandane
    },

    {
      name: 'Prof. S. C. Shrawne',
      marathiName: 'प्रा. एस. सी. श्रावणे',
      designation: 'Assistant Professor',
      marathiDesignation: 'सहाय्यक प्राध्यापक',
      photo: 'sc-shrawne.jpg'
    },
    {
      name: 'Dr. V. K. Sambhe',
      marathiName: 'डॉ. व्ही. के. सांभे',
      designation: 'Assistant Professor',
      marathiDesignation: 'सहाय्यक प्राध्यापक',
      photo: 'vk-sambhe.jpg'
    },

    {
      name: 'Dr. S. S. Udmale',
      marathiName: 'डॉ. एस. एस. उडमले',
      designation: 'Assistant Professor',
      marathiDesignation: 'सहाय्यक प्राध्यापक',
      image: ssUdmale
    },




    // -------------------------
    // FACULTY
    // -------------------------

    {
      name: 'Prof. M. U. Kulkarni',
      marathiName: 'प्रा. एम. यू. कुलकर्णी',
      designation: 'Assistant Professor',
      marathiDesignation: 'सहाय्यक प्राध्यापक',
      photo: 'mu-kulkarni.jpg'
    },
    {
      name: 'Prof. K. K. Joshi',
      marathiName: 'प्रा. के. के. जोशी',
      designation: 'Assistant Professor',
      marathiDesignation: 'सहाय्यक प्राध्यापक',
      photo: null
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
      name: 'Prof. S. S. Lachure',
      marathiName: 'प्रा. एस. एस. लचुरे',
      designation: 'Assistant Professor',
      marathiDesignation: 'सहाय्यक प्राध्यापक',
      photo: 'ss-lachure.jpg'
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
  // 5. SUPPORT TEAM
  // =======================================================

  const supportTeam = [

    {
      name: 'Miss. Pooja Chirke',
      marathiName: 'कु. पूजा चिरके',
      designation: 'Teaching Assistant',
      marathiDesignation: 'अध्यापन सहाय्यक',
      role: 'Conference Coordination & Technical Support',
      marathiRole: 'परिषद समन्वय आणि तांत्रिक सहाय्य',
      image: poojaChirke
    },
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
      name: 'Mr. Pratik Desai',
      marathiName: 'श्री. प्रतीक देसाई',
      designation: 'Teaching Assistant',
      marathiDesignation: 'अध्यापन सहाय्यक',
      role: 'Technical & Academic Support',
      marathiRole: 'तांत्रिक आणि शैक्षणिक सहाय्य',
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
  // PERSON CARDS
  // =======================================================

  const renderPersonCards = (members) => {
    return members.map((member, idx) => {

      // Direct imported image has first priority.
      // Dynamic organizing photo is second priority.

      const image =
        member.image ||
        getOrganizingPhoto(member.photo);

      return (
        <div
          className="committee-grid-item"
          key={`${member.name}-${idx}`}
        >
          <div className="card border-0 shadow-sm rounded-4 bg-white h-100 committee-card">

            <div className="card-body text-center p-3">

              <div className="committee-photo">
                {image ? (
                  <img
                    src={image}
                    alt={member.name}
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <i
                    className="bi bi-person-fill"
                    aria-hidden="true"
                  />
                )}
              </div>

              <h6 className="committee-name">
                {member.name}
              </h6>

              {member.marathiName && (
                <div className="committee-marathi-name">
                  {member.marathiName}
                </div>
              )}

              {member.designation && (
                <div className="committee-designation">
                  {member.designation}
                </div>
              )}

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
  // ADVISORY / SUPPORT CARDS
  // =======================================================

  const renderSmallCards = (members) => {
    return members.map((member, idx) => {

      // Direct image first.
      // Then photo field.
      const image = member.image || member.photo || null;

      return (
        <div
          className="committee-grid-item"
          key={`${member.name}-${idx}`}
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
                    decoding="async"
                  />
                ) : (
                  <i
                    className="bi bi-person-fill"
                    aria-hidden="true"
                  />
                )}
              </div>

              {/* NAME */}

              <h6 className="committee-name">
                {member.name}
              </h6>

              {/* MARATHI NAME */}

              {member.marathiName && (
                <div className="committee-marathi-name">
                  {member.marathiName}
                </div>
              )}

              {/* DESIGNATION */}

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

              {/* AFFILIATION */}

              {member.affiliation && (
                <div className="committee-affiliation">
                  {member.affiliation}
                </div>
              )}

              {/* MARATHI AFFILIATION */}

              {member.marathiAffiliation && (
                <div className="committee-marathi-affiliation">
                  {member.marathiAffiliation}
                </div>
              )}

              {/* ROLE */}

              {member.role && (
                <div className="committee-affiliation">
                  {member.role}
                </div>
              )}

              {/* MARATHI ROLE */}

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
          <div>
            Organizing Committee & Advisory Board
          </div>

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
            Organizing Committee & Support Team
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
            आयोजन समिती आणि सहाय्यक पथक
          </div>
        </>
      }

      badge={
        <>
          <span>CONFERENCE LEADERSHIP</span>

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
              key={`${p.name}-${idx}`}
            >

              <div className="card border-0 shadow-sm rounded-4 bg-white text-center h-100 committee-card">

                <div className="card-body p-3">

                  <div className="large-committee-photo">

                    {p.image ? (
                      <img
                        src={p.image}
                        alt={p.name}
                        loading="lazy"
                        decoding="async"
                      />
                    ) : (
                      <i
                        className="bi bi-person-fill"
                        aria-hidden="true"
                      />
                    )}

                  </div>

                  <span className="badge bg-vjti-gold text-dark font-monospace mb-2">
                    {p.role}
                  </span>

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

                  <h5 className="fw-bold text-dark mb-1">
                    {p.name}
                  </h5>

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

                  <p className="text-muted small mb-1">
                    {p.title}
                  </p>

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
            Distinguished international experts supporting SAQC 2027.
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
          4. ORGANIZING COMMITTEE
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
          5. SUPPORT TEAM
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
           GRID
        ================================================ */

        .committee-grid {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 18px;
          align-items: stretch;
        }

        .committee-grid-item {
          min-width: 0;
          display: flex;
        }

        /* ================================================
           CARD
        ================================================ */

        .committee-card {
          width: 100%;
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
          width: 82px;
          height: 82px;

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

          /* Prevent image from being visually distorted */
          flex-shrink: 0;
        }

        .committee-photo img {
          width: 100%;
          height: 100%;

          display: block;

          object-fit: cover;

          /*
           * Keeps the face centered.
           * Change to center 25% if the face appears too low.
           */
          object-position: center center;

          /*
           * Browser's normal high-quality image smoothing.
           * Do NOT use pixelated rendering.
           */
          image-rendering: auto;

          /*
           * Prevent unwanted opacity/filter blur.
           */
          opacity: 1;

          filter: none;
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

          flex-shrink: 0;
        }

        .large-committee-photo img {
          width: 100%;
          height: 100%;

          display: block;

          object-fit: cover;
          object-position: center center;

          image-rendering: auto;
          opacity: 1;
          filter: none;
        }

        .large-committee-photo i {
          font-size: 55px;
          color: #800000;
        }

        /* ================================================
           LARGE DESKTOP - 5 CARDS
        ================================================ */

        @media (min-width: 1201px) {

          .committee-grid {
            grid-template-columns:
              repeat(5, minmax(0, 1fr));
          }

        }

        /* ================================================
           LAPTOP - 4 CARDS
        ================================================ */

        @media (max-width: 1200px) {

          .committee-grid {
            grid-template-columns:
              repeat(4, minmax(0, 1fr));
          }

        }

        /* ================================================
           TABLET - 3 CARDS
        ================================================ */

        @media (max-width: 992px) {

          .committee-grid {
            grid-template-columns:
              repeat(3, minmax(0, 1fr));
          }

        }

        /* ================================================
           SMALL TABLET - 2 CARDS
        ================================================ */

        @media (max-width: 768px) {

          .committee-grid {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));

            gap: 14px;
          }

          .committee-photo {
            width: 78px;
            height: 78px;
          }

        }

        /* ================================================
           MOBILE - 1 CARD
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

          .committee-photo {
            width: 82px;
            height: 82px;
          }

          .large-committee-photo {
            width: 105px;
            height: 105px;
          }

        }

      `}</style>

    </MainLayout>
  );
};

export default CommitteePage;
