import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

import NR3 from '@/public/Images/neurotechr3_logo.jpeg'
import vv from '@/public/Images/VenutreVerse.png'
import outlier from '@/public/Images/outlier.jpeg'

export default function CustomizedTimeline() {
  return (
    <Timeline position="alternate">
      <TimelineItem >
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="primary"
        >
          Jan 2024 - Present
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
            <Image src={outlier} alt="outlier" className='m-10 rounded-full'/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }} className='bg-emerald-800 rounded-[25px]'>
          <Typography variant="h6" component="span">
            Software Developer - AI Trainer @ Outlier
          </Typography>
          <Typography>
            <ul className="space-y-3 list-disc list-inside indent-4 text-sm">
                <li>
                  Contributed to training cutting-edge generative AI models, enhancing their ability to write efficient and effective code
                </li>
                <li>
                  Engaged in projects focused on solving complex coding problems, writing test cases, human-readable summaries, and explanations of coding solutions to support AI model training
                </li>
                <li>
                  Leveraged flexible work arrangements to independently manage workload and contribute to AI model training efforts
                </li>
                <li>
                  Played a vital role in improving the performance and capabilities of AI models
                </li>
            </ul>
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="primary"
        >
          Sep 2023 - Dec 2023
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
            <Image src={vv} alt="Venture Verse" className='m-10 rounded-full'/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }} className='bg-emerald-800 rounded-[25px]'>
          <Typography variant="h6" component="span">
            Application Developer @ Venture Verse
          </Typography>
          <Typography>
            <ul className="space-y-3 list-disc list-inside indent-4 text-sm text-justify">
                <li>
                  Developed an IOS application in script using Xcode studios with a simple backend
                </li>
                <li>
                  Enhanced the User Interface by 200% while reducing developing time by 23% creating 10 component
                </li>
                <li>
                  Coordinated each developer to a feature or issue properly documented using github
                </li>
                <li>
                  Increased brand awareness by 10% using sales funnel and data collection ideas presented by AI
                </li>
                <li>
                  Applied scrum methodology to a team of 3 developers
                </li>
              </ul>
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
      <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="primary"
        >
          Jan 2023 - May 2023
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
            <Image src={NR3} alt="NueroTechR3" className='m-10 rounded-full'/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }} className='bg-emerald-800 rounded-[25px]'>
          <Typography variant="h6" component="span">
            Software Engineer @ NeuroTechR3 Inc.
          </Typography>
          <Typography>
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
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
