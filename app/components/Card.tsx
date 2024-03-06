import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, ThemeProvider, createTheme } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
// import SSSI from '@/public/Images/SSSI.jpg'

const theme = createTheme();

theme.typography.h5 = {
  fontSize: '1rem',
  '@media (max-width:40em)': {
    fontSize: '0.7rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '1.4rem',
  },
};
theme.typography.body2 = {
    fontSize: '.7rem',
    '@media (max-width:40em)': {
      fontSize: '0.6rem',
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: '.75rem',
      },
    [theme.breakpoints.up('xl')]: {
      fontSize: '.9rem',
    },
  };

export default function MultiActionArea({img, propA, propB, stack, link} : {img:any, propA:string, propB:string, stack:any, link:string}) {
  return (
    <Card sx={{ maxWidth: 350, backgroundColor: "#064e3b", color: "#f0fdf4", borderRadius: "25px", margin: "20 px", boxShadow: "4.0px 8.0px 8.0px rgba(0,0,0,0.38);",
        
    }} className="p-3">
      <CardActionArea href={link} sx={{ height: "400px", justifyContent: "space-around",
        '@media screen and (max-width: 40em)': {
            height: '210px',
            margin: '0px'
        },
        '@media screen and (min-width: 40em)': {
            height: '350px',
            margin: '0px'
        },
        '@media screen and (min-width: 70em)': {
            height: '400px',
            margin: '0px'
        },
      }}>
        <Image className=" md:p-2 md:object-cover rounded-[23px] h-20 md:h-[150px] lg:h-40" src={img} alt="SSSI"/>
        {/* <CardMedia
          component="img"
          height="140"
          image="@/public/Images/SSSI.jpg"
          alt="green iguana"
          className="p-2"
        /> */}
        <CardContent sx={{height: "stretch"}}>
        <ThemeProvider theme={theme}>
          <Typography gutterBottom variant="h5" component="div">
            {propA}
          </Typography>
          <Typography variant="body2" color="#d1fae5" className='line-clamp-4 sm:line-clamp-6'>
            {propB}
          </Typography>
        </ThemeProvider>
        </CardContent>
      </CardActionArea>
      <div className='h-[110px] justify-around'>
      <ul className='flex flex-wrap'>
        {stack.map((skill: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined, i: any) => {
            return (
                <li className='mr-1 mt-1' key={i}>
                    <div className='flex items-center rounded-full bg-zinc-800/50 px-2 py-1 text-[8px] lg:text-[12px] font-medium leading-2 '>{skill}</div>
                </li>
            )
          })}
      </ul>
      </div>
      <CardActions>
        <Button size="small" color="primary" className="">
          <Link href={link}>Github</Link>
        </Button>
      </CardActions>
    </Card>
  );
}