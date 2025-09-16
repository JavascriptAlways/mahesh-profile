import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { useState } from 'react';
import CertificatesPopup from './CertificatesPopup';
import './Certificates.css';

const Certificates = () => {
    const [dialogVisible, setDialogVisible] = useState(false);

    return (
        <div className="certifications-container">
            <div className="certifications-header">
                <h2 className="main-title">Professional Certifications</h2>
            </div>

            <div className="certifications-row">
                {/* Left Certification Card */}
                <Card className="certification-card">
                    <div className="card-content">
                        <img src="./images/ai_white_belt_certification.png" width="100%" alt="AI White Belt Certification" className="certifications-image" />
                        <div className="card-title">AI White Belt Certification</div>
                    </div>
                </Card>

                {/* Right Certification Card */}
                <Card className="certification-card">
                    <div className="card-content">
                        <img src="./images/promt_engg_certificate.jpg" width="100%" alt="Prompt Engineering Certificate" className="certifications-image" />
                        <div className="card-title">Prompt Engineering Certificate</div>
                    </div>
                </Card>
            </div>

            {/* Show More Projects Button */}
            <div className="show-more-container">
                <Button 
                    label="See More Certificates" 
                    icon="pi pi-external-link" 
                    className="show-more-button p-button-rounded p-button-lg"
                    onClick={() => setDialogVisible(true)}
                />
            </div>

            <CertificatesPopup 
                visible={dialogVisible}
                onHide={() => setDialogVisible(false)}
            />
        </div>
    );
}

export default Certificates;
