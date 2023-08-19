import Image from "next/image";
import Link from "next/link";

export default function Blog() {
  return (
    <>
    <a href="./">  Back to All Blogs</a>
      <h1> All from Elon Musk</h1>
      <div>
        <Image width={500} height={500} alt="Picture of the author" />
        <div>
          <h2> Introducing Whisper</h2>
          <p>Elon Musk - August 17th, 2023</p>
        </div>
      </div>
      <div>
        Whisper is an automatic speech recognition (ASR) system trained on
        680,000 hours of multilingual and multitask supervised data collected
        from the web. We show that the use of such a large and diverse dataset
        leads to improved robustness to accents, background noise and technical
        language. Moreover, it enables transcription in multiple languages, as
        well as translation from those languages into English. We are
        open-sourcing models and inference code to serve as a foundation for
        building useful applications and for further research on robust speech
        processing.
        <br />
      </div>
      <h2>Introducing ChatGPT</h2>
      <p>Elon Musk - August 17th, 2023</p>
      <div>
        We’ve trained a model called ChatGPT which interacts in a conversational
        way. The dialogue format makes it possible for ChatGPT to answer
        followup questions, admit its mistakes, challenge incorrect premises,
        and reject inappropriate requests. We’ve trained a model called ChatGPT
        which interacts in a conversational way. The dialogue format makes it
        possible for ChatGPT to answer followup questions, admit its mistakes,
        challenge incorrect premises, and reject inappropriate requests.Methods:
        We trained this model using Reinforcement Learning from Human Feedback
        (RLHF), using the same methods as InstructGPT, but with slight
        differences in the data collection setup. We trained an initial model
        using supervised fine-tuning: human AI trainers provided conversations
        in which they played both sides—the user and an AI assistant. We gave
        the trainers access to model-written suggestions to help them compose
        their responses. We mixed this new dialogue dataset with the InstructGPT
        dataset, which we transformed into a dialogue format. To create a reward
        model for reinforcement learning, we needed to collect comparison data,
        which consisted of two or more model responses ranked by quality. To
        collect this data, we took conversations that AI trainers had with the
        chatbot. We randomly selected a model-written message, sampled several
        alternative completions, and had AI trainers rank them. Using these
        reward models, we can fine-tune the model using Proximal Policy
        Optimization. We performed several iterations of this process.
      </div>
    </>
  );
}
