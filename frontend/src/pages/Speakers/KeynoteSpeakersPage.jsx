import React from 'react';
import MainLayout from '../../layouts/MainLayout';

export const KeynoteSpeakersPage = () => {
  return (
    <MainLayout
      title={
        <>
          <div>Keynote Speakers</div>

          <div
            style={{
              fontFamily:
                "'Mangal', 'Noto Sans Devanagari', 'Mukta', 'Hind', sans-serif",
              fontSize: '32px',
              lineHeight: '1.6',
              marginTop: '8px',
              color: '#ffffff'
            }}
          >
            प्रमुख वक्ते
          </div>
        </>
      }

      subtitle={
        <>
          <div>
            Distinguished keynote speakers for SAQC 2027
          </div>

          <div
            style={{
              fontFamily:
                "'Mangal', 'Noto Sans Devanagari', 'Mukta', 'Hind', sans-serif",
              fontSize: '18px',
              lineHeight: '1.9',
              marginTop: '12px',
              color: 'rgba(255,255,255,0.75)'
            }}
          >
            SAQC २०२७ साठी प्रमुख वक्त्यांची माहिती लवकरच उपलब्ध होईल.
          </div>
        </>
      }

      badge={
        <>
          <span>KEYNOTE SPEAKERS</span>

          <span
            style={{
              fontFamily:
                "'Mangal', 'Noto Sans Devanagari', 'Mukta', 'Hind', sans-serif",
              marginLeft: '12px'
            }}
          >
            प्रमुख वक्ते
          </span>
        </>
      }
    >

      <section className="py-5">
        <div className="card border-0 shadow-sm rounded-4">
          <div className="card-body text-center py-5">

            <div
              className="bg-vjti-navy text-vjti-gold rounded-circle
                         d-inline-flex align-items-center justify-content-center
                         mb-4 shadow"
              style={{
                width: '90px',
                height: '90px'
              }}
            >
              <i className="bi bi-mic-fill fs-1"></i>
            </div>

            <h2 className="fw-bold text-vjti-maroon mb-3">
              Keynote Speakers
            </h2>

            <h4
              style={{
                fontFamily:
                  "'Mangal', 'Noto Sans Devanagari', 'Mukta', 'Hind', sans-serif",
                color: '#6f42c1',
                fontWeight: '700'
              }}
            >
              प्रमुख वक्त्यांची माहिती लवकरच जाहीर करण्यात येईल.
            </h4>

            <p className="text-muted mt-3 mb-1">
              Details of the distinguished keynote speakers will be announced
              soon.
            </p>

            <p
              className="text-muted"
              style={{
                fontFamily:
                  "'Mangal', 'Noto Sans Devanagari', 'Mukta', 'Hind', sans-serif",
                lineHeight: '1.8'
              }}
            >
              आंतरराष्ट्रीय व राष्ट्रीय स्तरावरील मान्यवर प्रमुख वक्त्यांची
              नावे, पदनामे आणि व्याख्यानांची माहिती लवकरच येथे प्रसिद्ध केली जाईल.
            </p>

            <span className="badge bg-vjti-gold text-dark px-4 py-2 mt-3">
              COMING SOON
            </span>

          </div>
        </div>
      </section>

    </MainLayout>
  );
};

export default KeynoteSpeakersPage;