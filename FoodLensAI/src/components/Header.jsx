import { useEffect, useState } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosurePanel,
} from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import Logo from "../assets/favicon.ico";

const navigation = [
  { name: "Home", href: "#home" },
  {
    name: "Project Scope",
    subItems: [
      { name: "Overview", href: "#overview" },
      { name: "Literature Survey", href: "#literature-survey" },
      { name: "Research Gap", href: "#research-gap" },
      {
        name: "Research Problem & Solution",
        href: "#research-problem-solution",
      },
      { name: "Research Objectives", href: "#research-objectives" },
      { name: "Methodology", href: "#methodology" },
      { name: "Technologies", href: "#technologies" },
    ],
  },
  { name: "Milestones", href: "#milestones" },
  {
    name: "Downloads",
    subItems: [
      { name: "Documents", href: "#documents" },
      { name: "Presentations", href: "#presentations" },
    ],
  },
  // { name: "Achievements", href: "#achievements" },
  { name: "About Us", href: "#about-us" },
  { name: "Contact Us", href: "#contact-us" },
];

const Header = () => {
  const [current, setCurrent] = useState("#home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const isCurrent = (item) => {
    if (item.href === current) return true;
    if (item.subItems) {
      return item.subItems.some((subItem) => subItem.href === current);
    }
    return false;
  };

  const handleScroll = () => {
    const sections = navigation.flatMap((item) =>
      item.subItems ? item.subItems.map((subItem) => subItem.href) : item.href
    );
    let scrollPosition = window.scrollY + window.innerHeight / 2;

    sections.forEach((section) => {
      const element = document.querySelector(section);
      if (element) {
        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;

        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          setCurrent(section);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrent(window.location.hash || "#home");
    };

    window.addEventListener("hashchange", handleHashChange);

    handleHashChange();

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <nav
        aria-label="Global"
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="#home" className="-m-1.5 p-1.5 flex items-center">
                <span className="sr-only">FoodLensAI</span>
                <img alt="FoodLensAI Logo" src={Logo} className="h-8 w-8" />
                <span className="text-2xl ml-5 font-bold text-cyan-600">
                  FoodLensAI
                </span>
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  <a
                    href={item.href}
                    className={
                      isCurrent(item)
                        ? "bg-cyan-600 text-white rounded-md px-3 py-2 text-sm font-medium"
                        : "text-gray-700 hover:bg-gray-200 hover:text-cyan-600 rounded-md px-3 py-2 text-sm font-medium"
                    }
                  >
                    {item.name}
                  </a>
                  {item.subItems && (
                    <div className="absolute left-0 z-10 hidden w-48 mt-2 bg-white border border-gray-200 rounded-md shadow-lg group-hover:block">
                      {item.subItems.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm font-medium"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-gray-100 text-gray-700 rounded-md px-3 py-2 text-sm font-medium border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-600"
                />
                <MagnifyingGlassIcon className="absolute right-2 top-2.5 h-5 w-5 text-gray-500 pointer-events-none" />
              </div>
            </div>
          </div>
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="md:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">FoodLensAI</span>
              <img
                alt="FoodLensAI Logo"
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=cyan&shade=600"
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <div className="px-3">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-gray-100 text-gray-700 rounded-md px-3 py-2 text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-600"
                    />
                    <MagnifyingGlassIcon className="absolute right-5 top-2.5 h-5 w-5 text-gray-500 pointer-events-none" />
                  </div>
                </div>
              </div>
              <div className="space-y-1 py-6">
                {navigation.map((item) => (
                  <Disclosure as="div" key={item.name} className="-mx-3">
                    <a
                      href={item.href}
                      className={`group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-sm font-medium leading-7 ${
                        isCurrent(item)
                          ? "bg-cyan-600 text-white"
                          : "text-gray-900 hover:bg-gray-200 hover:text-cyan-600"
                      }`}
                    >
                      {item.name}
                      {item.subItems && (
                        <ChevronDownIcon
                          aria-hidden="true"
                          className="h-5 w-5 flex-none group-data-[open]:rotate-180"
                        />
                      )}
                    </a>
                    {item.subItems && (
                      <DisclosurePanel className="mt-2 space-y-2">
                        {item.subItems.map((subItem) => (
                          <a
                            key={subItem.name}
                            href={subItem.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-700 hover:bg-gray-50"
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </DisclosurePanel>
                    )}
                  </Disclosure>
                ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default Header;
