import Image from "next/image";
import Link from 'next/link'
import github from '@/app/components/social-icons/github.svg'
import linkedin from '@/app/components/social-icons/linkedin.svg'
import mail from '@/app/components/social-icons/email.svg'

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
            <Link href={'https://github.com/AryanNesti'}>
                <Image src={github} alt="github"/>
            </Link>
            <Link href={'https://www.linkedin.com/in/aryan-nesti-047611222/'}>
                <Image src={linkedin} alt="linkedin" className=""/>
            </Link>
            <Link href={'mailto:AryanNesti60@gmail.com'}>
                <Image src={mail} alt="email" className="h-6 w-6"/>
            </Link>
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>
            Aryan Nesti
          </div>
          <div>{`© ${new Date().getFullYear()}`}</div>
        </div>
        <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">
          aiPortfolio
        </div>
      </div>
    </footer>
  );
}