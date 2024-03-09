"use client";
import MultiActionAreaCard from "./components/Card"
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { useCompletion } from "ai/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SSSI from '@/public/Images/SSSI.jpg'
import EMG from '@/public/Images/EMG.png'
import Article from '@/public/Images/Article_Categorizer.png'
import Mywebclass from '@/public/Images/MyWebClass.png'
import CTR from '@/public/Images/click_through_rate.png'
import { wrap } from "module";
import Image from "next/image";
import { useState } from "react";

// Importing SVGs
import numpy from '@/public/SVGs/numpy-svgrepo-com.svg'
import pandas from '@/public/SVGs/pandas-svgrepo-com.svg'
import pytorch from '@/public/SVGs/pytorch-svgrepo-com.svg'
import tensorflow from '@/public/SVGs/tensorflow-svgrepo-com.svg'
import Python from '@/public/SVGs/python-svgrepo-com.svg'
import Angular from '@/public/SVGs/angular-icon-svgrepo-com.svg'
import AWS from '@/public/SVGs/aws_icon_146074.svg'
import Cpp from '@/public/SVGs/cpp-svgrepo-com.svg'
import Csharp from '@/public/SVGs/csharp-svgrepo-com.svg'
import CSS from '@/public/SVGs/css-3-svgrepo-com.svg'
import Docker from '@/public/SVGs/docker-svgrepo-com.svg'
import Firebase from '@/public/SVGs/firebase-svgrepo-com.svg'
import Git from '@/public/SVGs/git-svgrepo-com.svg'
import Github from '@/public/SVGs/github-svgrepo-com.svg'
import HTML from '@/public/SVGs/html-5-svgrepo-com.svg'
import Java from '@/public/SVGs/java-svgrepo-com.svg'
import JavaScript from '@/public/SVGs/javascript-svgrepo-com.svg'
import Kotlin from '@/public/SVGs/kotlin-svgrepo-com.svg'
import Linux from '@/public/SVGs/linux-svgrepo-com.svg'
import MailChimp from '@/public/SVGs/mailchimp-svgrepo-com.svg'
import MongoDB from '@/public/SVGs/mongodb-svgrepo-com.svg'
import MySQL from '@/public/SVGs/mysql-logo-svgrepo-com.svg'
import NodeJS from '@/public/SVGs/node-js-svgrepo-com.svg'
import Oracle from '@/public/SVGs/oracle-svgrepo-com.svg'
import PHP from '@/public/SVGs/php-svgrepo-com.svg'
import Reactjs from '@/public/SVGs/react-svgrepo-com.svg'
import Slack from '@/public/SVGs/slack-svgrepo-com.svg'
import SQL from '@/public/SVGs/sql-database-generic-svgrepo-com.svg'
import Swift from '@/public/SVGs/swift-svgrepo-com.svg'
import TypeScript from '@/public/SVGs/typescript-svgrepo-com.svg'
import VScode from '@/public/SVGs/vs-code-svgrepo-com.svg'
import Developer from '@/public/SVGs/undraw_developer_activity_re_39tg.svg'
import Aryan from '@/public/Images/aryan.png'
import NeuroTechR3 from '@/public/Images/NeuroTechR3.jpeg'


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

export default function Home() {
  // When a file is dropped in the dropzone, call the `/api/addData` API to train our bot on a new PDF File
  // const onDrop = useCallback(async (acceptedFiles: File[]) => {
  //   const file = acceptedFiles[0];
  //   // document.write(file);
  //   console.log('====================================');
  //   console.log(file);
  //   console.log('====================================');

  //   if (file.type !== "application/pdf") {
  //     alert("Please upload a PDF");
  //     return;
  //   }

  //   const formData = new FormData();
  //   formData.set("file", file);

  //   const response = await fetch("/api/addData", {
  //     method: "POST",
  //     body: formData,
  //   });

  //   const body = await response.json();

  //   if (body.success) {
  //     alert("Data added successfully");
  //   }
  // }, []);



  // Configure react-dropzone
  // const { getRootProps, getInputProps } = useDropzone({
  //   onDrop,
  // });

  // Vercel AI hook for generating completions through an AI model
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);
  const { completion, input, isLoading, handleInputChange, handleSubmit } =
    useCompletion({
      api: "/api/chat",
    });

  const techstach = [Linux, Docker, Angular, Slack, HTML, CSS, AWS, Github, Git, Firebase, Reactjs, NodeJS, SQL, MySQL, Oracle, PHP, MongoDB, JavaScript, TypeScript, Java, Cpp, Csharp, Python, numpy, pandas, pytorch, tensorflow, Swift, Kotlin, MailChimp]
  var str = 'Waiting...'
  function handleClick() {
    str = 'Thinking...'
  }
  return (
    <>
      <div
          className="flex items-center lg:flex-row flex-col-reverse mx-auto justify-center justify-evenly lg:px-6 xl:py-10 rounded-lg shadow-2xl bg-zinc-800 mt-6"
          style={{ maxWidth: "1500px", animation: "transitionIn 1s" }}
        >
        <main className="flex flex-col p-24 lg:ml-[75px]">
          {/* <div
            {...getRootProps({
              className:
                "dropzone bg-gray-900 border border-gray-800 p-10 rounded-md hover:bg-gray-800 transition-colors duration-200 ease-in-out cursor-pointer",
            })}
          >
            <input {...getInputProps()} />
            <p>Upload a PDF to add new data</p>
          </div> */}
          

          <div className="mx-auto w-full items-center max-w-md flex flex-col stretch">
            <div className="pb-20 text-center">
              <h1 className="font-bold text-2xl">Hello, I am Aryan AI</h1>
              <p>Ask me any questions you have about Aryan Nesti.</p>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                className=" w-full max-w-md text-black border border-gray-300 rounded shadow-xl p-2"
                value={input}
                placeholder="Enter your prompt..."
                onChange={handleInputChange}
              />

              <button
                disabled={isLoading}
                type="submit"
                onClick={() => setActiveButtonIndex(1)}
                className="py-2 hover:shadow-[1px_1px_20px_3px_rgba(8,_112,_184,_0.7)] shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg bg-emerald-900 text-sm px-6"
              >
                Submit
              </button>

              <p className="text-center">
                Results: {completion === "" ? str : completion}
              </p>
            </form>
          </div>
        </main>
        <div className="lg:mr-[75px]">
          <Image className={isLoading ? 'animate-[spin_3s_ease-in-out_infinite] w-[500px] border-emerald-800 border-4 rounded-full' : 'w-[500px] border-emerald-800 border-4 rounded-full'} src={Aryan} alt="Aryan"></Image>
        </div>
      </div>
      <div className="mx-auto items-center flex lg:flex-row flex-col-reverse justify-center lg:px-6 xl:py-10 py-6 bg-white rounded-lg lg:shadow-2xl bg-zinc-800  mt-6" style={{ maxWidth: "1500px", animation: "transitionIn 1s" }}>
        <div className="mx-auto w-full max-w-md flex flex-col stretch space-y-5" style={{ maxWidth: "1500px", animation: "transitionIn 1s" }}>
          <h1 id='about' className="text-center text-4xl">Who I am</h1>
          <p style={{width: "65%", alignSelf: "center"}}>Software Developer, AI/ML Engineer, Data Engineer, Full Stack Developer and App Developer, with great aspirations in rapidly growing field of Artificial Intelligence. I am a jack of all trades, where I am a software developer, Data Science and Machine learning Engineer, Full Stack Developer and an App Developer. However, my greatest desire is to be involved in Generative AI as it is taking the world by storm. </p>
          <p style={{width: "65%", alignSelf: "center"}}>I have worked with programming in several languages ranging from python, C, C++, Java, SQLite, Bash Scripting, Kotlin and Swift. Many of my projects consists of using the scikit-learn library to create models to later predict the outcome. Some of my more recent projects include generative AI in a more user interface with Web development with Node.JS and React or App development with Kotlin. Recently I aspired to be an entrepreneur creating a startup Venture Verse, however with the lack of cofounders we are on hiatus currently.</p>
          <h1 className="text-center text-4xl">TechStack</h1>
          <div className="grid grid-rows-4 grid-flow-col " style={{ maxWidth: "1300px", animation: "transitionIn 1s" }}>
          {techstach.map((stack, i) => {
            return (
              <Image src={stack} key={i} alt={stack} className='h-20 w-20 m-2 p-2'></Image>
            )
          })}
          </div>
        </div>
        <div className="flex flex-row ">
          <Image src={Developer} alt="developer" className="w-100 h-100 p-10"/>
        </div>
      </div>
      <div className="flex items-center flex-col mx-auto px-6 py-10 rounded-lg shadow-2xl bg-zinc-800 mt-6" style={{ maxWidth: "1500px", animation: "transitionIn 1s" }}>
        <h1 id="experience" className="text-4xl">Experience</h1>
        <div className="flex lg:flex-row flex-col items-center justify-evenly md:space-x-10 p-5" style={{ maxWidth: "1500px", animation: "transitionIn 1s" }}>
          <div className="">
            <Image src={NeuroTechR3} alt="NeuroTechR3 Inc" className=" rounded-[25px]"/>
          </div>
          <div className="space-y-4 bg-emerald-900 rounded p-4 rounded-[25px] place-content-center">
              <p className="font-bold text-2xl">NeuroTechR3, Inc.</p>
              <p>NeuroTechR3 develops evidence-based exergame technologies that help clinicians optimize rehabilitation outcomes for individuals with neurological diseases. We provide affordable and engaging solutions for people of all ages, empowering them to enhance their overall wellness and quality of life.</p>
              <p>Because I signed an NDA I cannot disclose too much information, but what I can mention is that we developed a prototype exergame in which users or patients would control the game mechanicss by</p>
              <ul className="space-y-3 list-disc list-inside indent-4 text-sm">
                <li>
                  Constructed a library on top of Google MediaPipe’s library on hand tracking.
                </li>
                <li>
                  Assisted in implementing a model to recognize medical gestures.
                </li>
                <li>
                  Created a Unity exergame to showcase the model
                </li>
                <li>
                  Reconstructed the model to function on mobile devices.
                </li>
                <li>
                  Coordinated effectively in an Agile team of 5 members
                </li>
              </ul>
              
          </div>
        </div>
      </div>
      <div
          className="flex lg:flex-row flex-col-reverse mx-auto items-center justify-center lg:px-6 xl:py-10 py-6 bg-white rounded-lg lg:shadow-2xl bg-zinc-800 mt-6"
          style={{ maxWidth: "1500px", animation: "transitionIn 1s" }}
        >
          <div className="mx-auto w-full max-w-md flex flex-col stretch"
          style={{ maxWidth: "1500px", animation: "transitionIn 1s" }}
        >
          <h1 id='projects' className="text-center text-4xl">Featured Projects</h1>
          <Carousel
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={3000}
            centerMode={true}
            className="p-24"
            containerClass="container-with-dots"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 1024
                },
                items: 3,
                partialVisibilityGutter: 40
              },
              mobile: {
                breakpoint: {
                  max: 464,
                  min: 0
                },
                items: 1,
                partialVisibilityGutter: 30
              },
              tablet: {
                breakpoint: {
                  max: 1024,
                  min: 464
                },
                items: 2,
                partialVisibilityGutter: 1000
              }
            }}
            rewind={false}
            rewindWithAnimation={true}
            rtl={false}
            shouldResetAutoplay
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
            swipeable
          >
            <div className="justify-center m-5"><MultiActionAreaCard img={SSSI} propA={"Semantic Segmentation of Satellite images"} propB={"This is a Machine Learning Project where we used Neural Networks (NNI) Web UI and allowing us to view the progress of the Unet model that would read Satellite Imagery and determine landmarks ranging from wildlife, buildings, water, roads, and more."} stack={['Python', 'NNI WebUI', 'Unet', 'Git', 'GAN', 'HyperOptimization', 'Knowledge Distilation', 'Level Pruning']} link={'https://github.com/AryanNesti/SSSI/tree/milestone-4'}/></div>
            <div className="justify-center m-5"><MultiActionAreaCard img={EMG} propA={" Electromyography and Gradient Boosting"} propB={"This Machine Learning Project we coded and used a cosinusoidal dataset and implemented gradient boosting on an EMG dataset to determine the patients movements"} stack={['Python', 'Gradient Boosting', 'scikit-learn', 'Decision Tree', 'NumPy', 'Pandas', ]} link={'https://github.com/AryanNesti/Electromyography-and-Gradient-Boosting'}/></div>
            <div className="justify-center m-5"><MultiActionAreaCard img={Article} propA={"Article Categorizer"} propB={"This project we compared the Decision Tree Classifier, Random Forrest Classifier, SVM Classifier from the scikit-learn library on Categorizing Articles based on the their content."} stack={['Python', 'Decision Tree', 'SVM', 'RandomForrest', 'Git', 'scikit-learn', 'NumPy', 'Pandas',]} link={'https://github.com/AryanNesti/Article-Categorizer'}/></div>
            <div className="justify-center m-5"><MultiActionAreaCard img={Mywebclass} propA={"MyWebClass"} propB={"This Web Project is created using Next.js and was made to demonstrate a sales funnel. Some things implemented are MailChimp, GDPR, Google Analytics, Play Write tests, Sanity and more that can be found on the github repository."} stack={['Next.js', 'Javascript', 'Github', 'Sanity', 'Kibana', 'Auth0', 'A/B Testing', ]} link={'https://njit-wis.github.io/project-2-is-219-sea/'}/></div>
            <div className="justify-center m-5"><MultiActionAreaCard img={CTR} propA={" Click-Through Rate Prediction"} propB={"We predicted the click through rate based on the data provided from the kaggle, in where I wrote the logistic regression solution from scratch for the prediction problem, that can work with Stochastic Gradient Descent (SGD)."} stack={['Python', 'SGD', 'NumPy', 'Pandas', 'Logistic Regression']} link={'https://github.com/AryanNesti/Logistic-Regression'}/></div>
          </Carousel>
          </div>
      </div>
    </>
  );
}