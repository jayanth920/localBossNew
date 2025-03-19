import MenuAnimation from "@/components/animata/list/menu-animation";

export function Menu() {
    return (
        <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8">
            <MenuAnimation menuItems={["Home", "Shop", "About Us", "FAQs"]}></MenuAnimation>
        </div>
    )
}

