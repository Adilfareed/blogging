import Image from "next/image";
import Link from "next/link";

export default function Blog() {
  return (
    <>
      <div className="blog">
        <div>
         
          <h5 className="blogtext"> Introducing Whisper</h5>
          <p className="blogtext" >Elon Musk - August 17th, 2023</p>
        </div > 
        
        <div className="blogtext"  >
        Whisper is an automatic speech recognition (ASR) system trained on
        680,000 hours of multilingual and multitask supervised data collected
        from the web. We show that the use of such a large and diverse dataset
        leads to improved robustness to accents, background noise and technical
        language. Moreover, it enables transcription in multiple languages, as
        well as translation from those languages into English. We are
        open-sourcing models and inference code to serve as a foundation for
        building useful applications and for further research on robust speech
        processing.</div>
      </div>
    </>
  );
}
