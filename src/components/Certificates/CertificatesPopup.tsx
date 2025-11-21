import React, { useState } from 'react';
import { Dialog } from 'primereact/dialog';
import { Card } from 'primereact/card';
import './CertificatesPopup.css';

interface CertificatesPopupProps {
    visible: boolean;
    onHide: () => void;
}

interface Certificate {
    id: number;
    image: string;
    title: string;
}

interface SelectedImage {
    src: string;
    title: string;
}

const CertificatesPopup: React.FC<CertificatesPopupProps> = ({ visible, onHide }) => {
    const [selectedImage, setSelectedImage] = useState<SelectedImage | null>(null);

    const handleImageClick = (cert: Certificate) => {
        setSelectedImage({
            src: cert.image,
            title: cert.title
        });
    };

    const handleClosePreview = () => {
        setSelectedImage(null);
    };

    const certificates: Certificate[] = [
        {
            id: 1,
            image: './images/ai_white_belt_certification.png',
            title: 'AI White Belt Certification'
        },
        {
            id: 2,
            image: './images/promt_engg_certificate.jpg',
            title: 'Prompt Engineering Certificate'
        },
        // Add more certificates here
        {
            id: 3,
            image: './images/generative_ai.jpg',
            title: 'Generative AI and Cloud Computing'
        },
        {
            id: 4,
            image: './images/python_for_datascience_certificate.jpg',
            title: 'Python for Data Science'
        },
        {
            id: 5,
            image: './images/aws_certificate.jpg',
            title: 'AWS ML Engineer Associate'
        },
        {
            id: 6,
            image: './images/pat_on_back.jpg',
            title: 'Appreciation Certificate'
        },
        {
            id: 7,
            image: './images/blue_belt_certification.png',
            title: 'AI Blue Belt Certification'
        },
        {
            id: 8,
            image: './images/github_copilot.png',
            title: 'GitHub Copilot'
        },
        {
            id: 9,
            image: './images/intercultural.png',
            title: 'Intercultural Competence'
        },
        {
            id: 10,
            image: './images/hipaa.png',
            title: 'HIPAA Certification'
        },        
        {
            id: 11,
            image: './images/artificial_intelligence.png',
            title: 'Artificial Intelligence Certification'
        }
    ];

    return (
        <>
            <Dialog 
                visible={visible} 
                onHide={onHide}
                header={<>
                    <i className="pi pi-star" style={{ marginRight: '0.5rem' }}></i>
                    Professional Achievements & Certifications
                    <i className="pi pi-star" style={{ marginLeft: '0.5rem' }}></i>
                </>}
                modal
                className="certificates-dialog"
                style={{ width: '90vw', maxWidth: '1200px' }}
                draggable={false}
                resizable={false}
                breakpoints={{ '960px': '95vw', '641px': '100vw' }}
            >
                <div className="certificates-grid">
                    {certificates.map((cert) => (
                        <div key={cert.id} className="certificate-grid-item">
                            <Card 
                                className="certificate-grid-card"
                                onClick={() => handleImageClick(cert)}
                            >
                                <div className="grid-card-content">
                                    <img 
                                        src={cert.image} 
                                        alt={cert.title}
                                        className="grid-certificate-image"
                                    />
                                    <div className="grid-certificate-title">
                                        {cert.title}
                                    </div>
                                </div>
                            </Card>
                        </div>
                    ))}
                </div>
            </Dialog>

            <Dialog
                visible={selectedImage !== null}
                onHide={handleClosePreview}
                header={
                    selectedImage && (
                        <>
                            <i className="pi pi-certificate" style={{ marginRight: '0.8rem' }}></i>
                            {selectedImage.title}
                            <i className="pi pi-verified" style={{ marginLeft: '0.8rem', color: '#8ec329' }}></i>
                        </>
                    )
                }
                modal
                className="image-preview-dialog"
                style={{ width: '95vw' }}
                contentStyle={{ overflow: 'hidden' }}
                draggable={false}
                resizable={false}
                maximizable
                blockScroll
                closeOnEscape
                dismissableMask
                onClick={(e) => {
                    // Close dialog when clicking outside the image
                    if (e.target instanceof HTMLImageElement) {
                        e.stopPropagation();
                    } else {
                        handleClosePreview();
                    }
                }}
            >
                <div className="image-preview-container">
                    {selectedImage && (
                        <img 
                            src={selectedImage.src}
                            alt={selectedImage.title}
                            className="full-size-image"
                            loading="eager"
                            onClick={(e) => e.stopPropagation()}
                        />
                    )}
                </div>
            </Dialog>
        </>
    );
}

export default CertificatesPopup;