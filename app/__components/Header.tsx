import GithubIcon from "@/app/__components/icons/GithubIcon";
import Section from "./Section"
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import TwitterIcon from "@/app/__components/icons/TwitterIcon";
import LinkedinIcon from "@/app/__components/icons/LinkedinIcon";

const Header = () => {
    return ( 
        <header className="sticky top-0 py-4">
            <Section className="flex item-baseline">
                <h1 className="text-lg font-bold text-primary">
                    SIROUKANE Abdelhakim
                </h1>
                <div className="flex-1" />
                <ul className="flex items-center gap-2">
                    <Link 
                    href=""
                    className={cn(buttonVariants({ variant: "outline"}), "size-6 p-0")}
                    > 
                        <GithubIcon size={16} className="text-foreground"/>
                    </Link>
                    <Link 
                    href=""
                    className={cn(buttonVariants({ variant: "outline"}), "size-6 p-0")}
                    > 
                        <TwitterIcon size={16} className="text-foreground"/>
                    </Link>
                    <Link 
                    href=""
                    className={cn(buttonVariants({ variant: "outline"}), "size-6 p-0")}
                    > 
                        <LinkedinIcon size={16} className="text-foreground"/>
                    </Link>
                </ul>
            </Section>
        </header>
     );
}
 
export default Header;