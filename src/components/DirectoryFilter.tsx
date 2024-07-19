"use client";
import { ChangeEvent, useState } from "react";
import { IoArrowForward } from "react-icons/io5";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { ScrollArea } from "./ui/scroll-area";

// Assuming you have this file for styles

function DirectoryFilter({ selectedFilters, handleFilterChange }:any) {
  const countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo, Democratic Republic of the",
    "Congo, Republic of the",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "East Timor (Timor-Leste)",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea, North",
    "Korea, South",
    "Kosovo",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia, Federated States of",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar (Burma)",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Macedonia",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Vatican City (Holy See)",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ];

  const Industries = [
    "Neutral",
    "Accounting firms",
    "Agriculture",
    "Banking and Finance",
    "Construction and Engineering",
    "Consulting firms",
    "Education",
    "Energy and Utilities",
    "Government and Public Sector",
    "Healthcare",
    "Hospitality and Tourism",
    "Insurance",
    "Legal Services Providers",
    "Manufacturing",
    "Media and Entertainment",
    "Non-Profit Organizations",
    "Pharmaceutical and Life Sciences",
    "Real Estate",
    "Retail and Consumer Goods",
    "Technology and Software",
    "Telecommunications",
    "Transportation and Logistics",
  ];

  const practiseArea = [
    "Appellate Law",
    "Antitrust Law",
    "Alternative Dispute Resolution",
    "Aviation",
    "Banking & Finance",
    "Business Law",
    "Civil Law",
    "Company",
    "Contract",
    "Consumer Protection",
    "Competition/Anti-Trust Law",
    "Construction",
    "Corporate Law",
    "Cybersecurity and Privacy Law",
    "Mergers and Acquisitions (M&A)",
    "Defense Law",
    "Dispute Resolution",
    "Election Law",
    "Education Law",
    "Energy and Natural Resources",
    "Environmental Law",
    "Labour and Employment Law",
    "Franchise Law",
    "Foreign Exchange Law",
    "Family and Succession",
    "Food and Drug Law",
    "Gaming Law",
    "Human Rights Law",
    "Healthcare",
    "International Law",
    "Immigration Law",
    "Infrastructure",
    "Insolvency and Banking",
    "Insurance",
    "Information Technology",
    "Intellectual Property Law",
    "Investment Law",
    "International Trade and Customs Law",
    "Management of Litigation",
    "Manufacturing in India",
    "Metals and Mining",
    "Technology Law",
    "Tax Law",
    "Telecommunication Law",
    "Personal Injury Law",
    "Product Liability",
    "Pharma and Life Sciences",
    "Public Interest Law",
    "Public Finance Law",
    "Railways",
    "Real Estate/Property Law",
    "Social Security and Disability Law",
    "Securities Law",
    "Sports, Media, Entertainment and Advertising",
    "Shipping",
    "Tax-Exempt Organizations Law",
    "Transportation Law",
    "Trade and commerce",
    "Trust",
    "Other",
  ];
  const [openCategory, setOpenCategory] = useState({
    category: false,
    customer: false,
    country: false,
    pricing: false,
    deployment: false,
    mobile: false,
    lang: false,
    industry: false,
    practice: false,
    
  });

  const toggleOpenCategory = (category: string) => {
    setOpenCategory((prevState) => {
      const categoryKey = category as keyof typeof prevState;
      return {
        ...prevState,
        [categoryKey]: !prevState[categoryKey],
      };
    });
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>, filterType: string, value: string) => {
    handleFilterChange(filterType, value);
  };

  return (
    <ScrollArea className="h-screen pb-10 w-full">
      <div className="space-y-2 font-clarity">
        <div className="overflow-hidden rounded-lg border">
          <div
            className="flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900 transition-all duration-200"
            onClick={() => toggleOpenCategory("category")}
          >
            <div>
              <div className="inline-flex items-center gap-3">
                <MdOutlineBusinessCenter className="w-5 h-5" />
                <span className="text-sm font-medium"> Categories </span>
              </div>
            </div>
            <span className={`transition-all ml-auto ${openCategory.category ? "rotate-90" : ""}`}>
              <IoArrowForward />
            </span>
          </div>
          <div className={`transition-height duration-300 ease-in-out ${openCategory.category ? "max-h-screen" : "max-h-0"}`}>
            <ul className="space-y-1 border-t border-gray-200 p-4">
              <li>
                <label htmlFor="Document Management and Automation" className="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="Document Management and Automation"
                    className="size-5 rounded border-gray-300"
                    checked={selectedFilters.categories.includes("Document Management and Automation")}
                    onChange={(e) => handleCheckboxChange(e, "categories", "Document Management and Automation")}
                  />
                  <span className="text-sm font-medium text-gray-700"> Document Management and Automation </span>
                </label>
              </li>
              <li>
                <label htmlFor="Client Management Software" className="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="Client Management Software"
                    className="size-5 rounded border-gray-300"
                    checked={selectedFilters.categories.includes("Client Management Software")}
                    onChange={(e) => handleCheckboxChange(e, "categories", "Client Management Software")}
                  />
                  <span className="text-sm font-medium text-gray-700"> Client Management Software </span>
                </label>
              </li>
              <li>
                <label htmlFor="Governance and Compliance and Risk Management" className="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="Governance and Compliance and Risk Management"
                    className="size-5 rounded border-gray-300"
                    checked={selectedFilters.categories.includes("Governance and Compliance and Risk Management")}
                    onChange={(e) => handleCheckboxChange(e, "categories", "Governance and Compliance and Risk Management")}
                  />
                  <span className="text-sm font-medium text-gray-700"> Governance and Compliance and Risk Management </span>
                </label>
              </li>
              <li>
                <label htmlFor="Contract Management Software" className="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="Contract Management Software"
                    className="size-5 rounded border-gray-300"
                    checked={selectedFilters.categories.includes("Contract Management Software")}
                    onChange={(e) => handleCheckboxChange(e, "categories", "Contract Management Software")}
                  />
                  <span className="text-sm font-medium text-gray-700"> Contract Management Software </span>
                </label>
              </li>
              <li>
                <label htmlFor="Digital Signature" className="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="Digital Signature"
                    className="size-5 rounded border-gray-300"
                    checked={selectedFilters.categories.includes("Digital Signature")}
                    onChange={(e) => handleCheckboxChange(e, "categories", "Digital Signature")}
                  />
                  <span className="text-sm font-medium text-gray-700"> Digital Signature </span>
                </label>
              </li>
              <li>
                <label htmlFor="E-billing and Invoicing" className="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="E-billing and Invoicing"
                    className="size-5 rounded border-gray-300"
                    checked={selectedFilters.categories.includes("E-billing and Invoicing")}
                    onChange={(e) => handleCheckboxChange(e, "categories", "E-billing and Invoicing")}
                  />
                  <span className="text-sm font-medium text-gray-700"> E-billing and Invoicing </span>
                </label>
              </li>
              <li>
                <label htmlFor="E-discovery" className="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="E-discovery"
                    className="size-5 rounded border-gray-300"
                    checked={selectedFilters.categories.includes("E-discovery")}
                    onChange={(e) => handleCheckboxChange(e, "categories", "E-discovery")}
                  />
                  <span className="text-sm font-medium text-gray-700"> E-discovery </span>
                </label>
              </li>
              <li>
                <label htmlFor="Intellectual Property Management" className="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="Intellectual Property Management"
                    className="size-5 rounded border-gray-300"
                    checked={selectedFilters.categories.includes("Intellectual Property Management")}
                    onChange={(e) => handleCheckboxChange(e, "categories", "Intellectual Property Management")}
                  />
                  <span className="text-sm font-medium text-gray-700"> Intellectual Property Management </span>
                </label>
              </li>
              <li>
                <label htmlFor="Litigation Management and Analytics" className="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="Litigation Management and Analytics"
                    className="size-5 rounded border-gray-300"
                    checked={selectedFilters.categories.includes("Litigation Management and Analytics")}
                    onChange={(e) => handleCheckboxChange(e, "categories", "Litigation Management and Analytics")}
                  />
                  <span className="text-sm font-medium text-gray-700"> Litigation Management and Analytics </span>
                </label>
              </li>
              <li>
                <label htmlFor="Legal Workflow Automation" className="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="Legal Workflow Automation"
                    className="size-5 rounded border-gray-300"
                    checked={selectedFilters.categories.includes("Legal Workflow Automation")}
                    onChange={(e) => handleCheckboxChange(e, "categories", "Legal Workflow Automation")}
                  />
                  <span className="text-sm font-medium text-gray-700"> Legal Workflow Automation </span>
                </label>
              </li>
              <li>
                <label htmlFor="Legal Research" className="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="Legal Research"
                    className="size-5 rounded border-gray-300"
                    checked={selectedFilters.categories.includes("Legal Research")}
                    onChange={(e) => handleCheckboxChange(e, "categories", "Legal Research")}
                  />
                  <span className="text-sm font-medium text-gray-700"> Legal Research </span>
                </label>
              </li>
              {/* Add more categories here */}
            </ul>
          </div>
        </div>

        <div className="overflow-hidden rounded-lg border">
          <div
            className="flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900 transition-all duration-200"
            onClick={() => toggleOpenCategory("customer")}
          >
            <div>
              <div className="inline-flex items-center gap-3">
                <MdOutlineBusinessCenter className="w-5 h-5" />
                <span className="text-sm font-medium"> Customers </span>
              </div>
            </div>
            <span className={`transition-all ml-auto ${openCategory.customer ? "rotate-90" : ""}`}>
              <IoArrowForward />
            </span>
          </div>
          <div className={`transition-height duration-300 ease-in-out ${openCategory.customer ? "max-h-screen" : "max-h-0"}`}>
            <ul className="space-y-1 border-t border-gray-200 p-4">
              <li>
                <label htmlFor="Individual Practitioner" className="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="Individual Practitioner"
                    className="size-5 rounded border-gray-300"
                    checked={selectedFilters.userCategories.includes("Individual Practitioner")}
                    onChange={(e) => handleCheckboxChange(e, "userCategories", "Individual Practitioner")}
                  />
                  <span className="text-sm font-medium text-gray-700"> Individual Practitioner </span>
                </label>
              </li>
              <li>
                <label htmlFor="Law firms" className="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="Law firms"
                    className="size-5 rounded border-gray-300"
                    checked={selectedFilters.userCategories.includes("Law firms")}
                    onChange={(e) => handleCheckboxChange(e, "userCategories", "Law firms")}
                  />
                  <span className="text-sm font-medium text-gray-700"> Law firms </span>
                </label>
              </li>
              <li>
                <label htmlFor="Government departments" className="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="Government departments"
                    className="size-5 rounded border-gray-300"
                    checked={selectedFilters.userCategories.includes("Government departments")}
                    onChange={(e) => handleCheckboxChange(e, "userCategories", "Government departments")}
                  />
                  <span className="text-sm font-medium text-gray-700"> Government departments </span>
                </label>
              </li>
              <li>
                <label htmlFor="Startups" className="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="Startups"
                    className="size-5 rounded border-gray-300"
                    checked={selectedFilters.userCategories.includes("Startups")}
                    onChange={(e) => handleCheckboxChange(e, "userCategories", "Startups")}
                  />
                  <span className="text-sm font-medium text-gray-700"> Startups </span>
                </label>
              </li>
              <li>
                <label htmlFor="Enterprises" className="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="Enterprises"
                    className="size-5 rounded border-gray-300"
                    checked={selectedFilters.userCategories.includes("Enterprises")}
                    onChange={(e) => handleCheckboxChange(e, "userCategories", "Enterprises")}
                  />
                  <span className="text-sm font-medium text-gray-700"> Enterprises </span>
                </label>
              </li>
              <li>
                <label htmlFor="Judiciary" className="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="Judiciary"
                    className="size-5 rounded border-gray-300"
                    checked={selectedFilters.userCategories.includes("Judiciary")}
                    onChange={(e) => handleCheckboxChange(e, "userCategories", "Judiciary")}
                  />
                  <span className="text-sm font-medium text-gray-700"> Judiciary </span>
                </label>
              </li>
              {/* Add more categories here */}
            </ul>
          </div>
        </div>


        <div className="overflow-hidden rounded-lg border">
          <div
            className="flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900 transition-all duration-200"
            onClick={() => toggleOpenCategory("lang")}
          >
            <div>
              <div className="inline-flex items-center gap-3">
                <MdOutlineBusinessCenter className="w-5 h-5" />
                <span className="text-sm font-medium"> Language </span>
              </div>
            </div>
            <span className={`transition-all ml-auto ${openCategory.lang ? "rotate-90" : ""}`}>
              <IoArrowForward />
            </span>
          </div>
          <div className={`transition-height duration-300 ease-in-out ${openCategory.lang ? "max-h-screen" : "max-h-0"}`}>
            <ul className="space-y-1 border-t border-gray-200 p-4">
              <li>
                <label htmlFor="Arabic" className="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="Arabic"
                    className="size-5 rounded border-gray-300"
                    checked={selectedFilters.language.includes("Arabic")}
                    onChange={(e) => handleCheckboxChange(e, "language", "Arabic")}
                  />
                  <span className="text-sm font-medium text-gray-700"> Arabic </span>
                </label>
              </li>
              <li>
                <label htmlFor="Bulgarian" className="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="Bulgarian"
                    className="size-5 rounded border-gray-300"
                    checked={selectedFilters.language.includes("Bulgarian")}
                    onChange={(e) => handleCheckboxChange(e, "language", "Bulgarian")}
                  />
                  <span className="text-sm font-medium text-gray-700"> Bulgarian </span>
                </label>
              </li>
              <li>
                <label htmlFor="Chinese" className="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="Chinese"
                    className="size-5 rounded border-gray-300"
                    checked={selectedFilters.language.includes("Chinese")}
                    onChange={(e) => handleCheckboxChange(e, "language", "Chinese")}
                  />
                  <span className="text-sm font-medium text-gray-700"> Chinese </span>
                </label>
              </li>
              <li>
                <label htmlFor="Configurable" className="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="Configurable"
                    className="size-5 rounded border-gray-300"
                    checked={selectedFilters.language.includes("Configurable")}
                    onChange={(e) => handleCheckboxChange(e, "language", "Configurable")}
                  />
                  <span className="text-sm font-medium text-gray-700"> Configurable </span>
                </label>
              </li>
              <li>
                <label htmlFor="Croatian" className="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="Croatian"
                    className="size-5 rounded border-gray-300"
                    checked={selectedFilters.language.includes("Croatian")}
                    onChange={(e) => handleCheckboxChange(e, "language", "Croatian")}
                  />
                  <span className="text-sm font-medium text-gray-700"> Croatian </span>
                </label>
              </li>
              <li>
                <label htmlFor="Czech" className="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="Czech"
                    className="size-5 rounded border-gray-300"
                    checked={selectedFilters.language.includes("Czech")}
                    onChange={(e) => handleCheckboxChange(e, "language", "Czech")}
                  />
                  <span className="text-sm font-medium text-gray-700"> Czech </span>
                </label>
              </li>
              <li>
                <label htmlFor="Danish" className="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="Danish"
                    className="size-5 rounded border-gray-300"
                    checked={selectedFilters.language.includes("Danish")}
                    onChange={(e) => handleCheckboxChange(e, "language", "Danish")}
                  />
                  <span className="text-sm font-medium text-gray-700"> Danish </span>
                </label>
              </li>
              <li>
                <label htmlFor="Dutch" className="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="Dutch"
                    className="size-5 rounded border-gray-300"
                    checked={selectedFilters.language.includes("Dutch")}
                    onChange={(e) => handleCheckboxChange(e, "language", "Dutch")}
                  />
                  <span className="text-sm font-medium text-gray-700"> Dutch </span>
                </label>
              </li>
              <li>
                <label htmlFor="English" className="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="English"
                    className="size-5 rounded border-gray-300"
                    checked={selectedFilters.language.includes("English")}
                    onChange={(e) => handleCheckboxChange(e, "language", "English")}
                  />
                  <span className="text-sm font-medium text-gray-700"> English </span>
                </label>
              </li>
              <li>
                <label htmlFor="Estonian" className="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="Estonian"
                    className="size-5 rounded border-gray-300"
                    checked={selectedFilters.language.includes("Estonian")}
                    onChange={(e) => handleCheckboxChange(e, "language", "Estonian")}
                  />
                  <span className="text-sm font-medium text-gray-700"> Estonian </span>
                </label>
              </li>
              <li>
                <label htmlFor="Finnish" className="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="Finnish"
                    className="size-5 rounded border-gray-300"
                    checked={selectedFilters.language.includes("Finnish")}
                    onChange={(e) => handleCheckboxChange(e, "language", "Finnish")}
                  />
                  <span className="text-sm font-medium text-gray-700"> Finnish </span>
                </label>
              </li>
              <li>
                <label htmlFor="Flemish" className="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="Flemish"
                    className="size-5 rounded border-gray-300"
                    checked={selectedFilters.language.includes("Flemish")}
                    onChange={(e) => handleCheckboxChange(e, "language", "Flemish")}
                  />
                  <span className="text-sm font-medium text-gray-700"> Flemish </span>
                </label>
              </li>
              <li>
                <label htmlFor="French" className="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="French"
                    className="size-5 rounded border-gray-300"
                    checked={selectedFilters.language.includes("French")}
                    onChange={(e) => handleCheckboxChange(e, "language", "French")}
                  />
                  <span className="text-sm font-medium text-gray-700"> French </span>
                </label>
              </li>
              <li>
                <label htmlFor="German" className="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="German"
                    className="size-5 rounded border-gray-300"
                    checked={selectedFilters.language.includes("German")}
                    onChange={(e) => handleCheckboxChange(e, "language", "German")}
                  />
                  <span className="text-sm font-medium text-gray-700"> German </span>
                </label>
              </li>
              <li>
                <label htmlFor="Greek" className="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="Greek"
                    className="size-5 rounded border-gray-300"
                    checked={selectedFilters.language.includes("Greek")}
                    onChange={(e) => handleCheckboxChange(e, "language", "Greek")}
                  />
                  <span className="text-sm font-medium text-gray-700"> Greek </span>
                </label>
              </li>
              <li>
                <label htmlFor="Hebrew" className="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="Hebrew"
                    className="size-5 rounded border-gray-300"
                    checked={selectedFilters.language.includes("Hebrew")}
                    onChange={(e) => handleCheckboxChange(e, "language", "Hebrew")}
                  />
                  <span className="text-sm font-medium text-gray-700"> Hebrew </span>
                </label>
              </li>
              <li>
                <label htmlFor="Hindi" className="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="Hindi"
                    className="size-5 rounded border-gray-300"
                    checked={selectedFilters.language.includes("Hindi")}
                    onChange={(e) => handleCheckboxChange(e, "language", "Hindi")}
                  />
                  <span className="text-sm font-medium text-gray-700"> Hindi </span>
                </label>
              </li>
              <li>
                <label htmlFor="Hungarian" className="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="Hungarian"
                    className="size-5 rounded border-gray-300"
                    checked={selectedFilters.language.includes("Hungarian")}
                    onChange={(e) => handleCheckboxChange(e, "language", "Hungarian")}
                  />
                  <span className="text-sm font-medium text-gray-700"> Hungarian </span>
                </label>
              </li>
              <li>
                <label htmlFor="Icelandic" className="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="Icelandic"
                    className="size-5 rounded border-gray-300"
                    checked={selectedFilters.language.includes("Icelandic")}
                    onChange={(e) => handleCheckboxChange(e, "language", "Icelandic")}
                  />
                  <span className="text-sm font-medium text-gray-700"> Icelandic </span>
                </label>
              </li>
              <li>
                <label htmlFor="Indonesian" className="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="Indonesian"
                    className="size-5 rounded border-gray-300"
                    checked={selectedFilters.language.includes("Indonesian")}
                    onChange={(e) => handleCheckboxChange(e, "language", "Indonesian")}
                  />
                  <span className="text-sm font-medium text-gray-700"> Indonesian </span>
                </label>
              </li>
              <li>
                <label htmlFor="Italian" className="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="Italian"
                    className="size-5 rounded border-gray-300"
                    checked={selectedFilters.language.includes("Italian")}
                    onChange={(e) => handleCheckboxChange(e, "language", "Italian")}
                  />
                  <span className="text-sm font-medium text-gray-700"> Italian </span>
                </label>
              </li>
              <li>
                <label htmlFor="Japanese" className="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="Japanese"
                    className="size-5 rounded border-gray-300"
                    checked={selectedFilters.language.includes("Japanese")}
                    onChange={(e) => handleCheckboxChange(e, "language", "Japanese")}
                  />
                  <span className="text-sm font-medium text-gray-700"> Japanese </span>
                </label>
              </li>
              <li>
                <label htmlFor="Korean" className="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="Korean"
                    className="size-5 rounded border-gray-300"
                    checked={selectedFilters.language.includes("Korean")}
                    onChange={(e) => handleCheckboxChange(e, "language", "Korean")}
                  />
                  <span className="text-sm font-medium text-gray-700"> Korean </span>
                </label>
              </li>
              <li>
                <label htmlFor="Latvian" className="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="Latvian"
                    className="size-5 rounded border-gray-300"
                    checked={selectedFilters.language.includes("Latvian")}
                    onChange={(e) => handleCheckboxChange(e, "language", "Latvian")}
                  />
                  <span className="text-sm font-medium text-gray-700"> Latvian </span>
                </label>
              </li>
              <li>
                <label htmlFor="Lithuanian" className="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="Lithuanian"
                    className="size-5 rounded border-gray-300"
                    checked={selectedFilters.language.includes("Lithuanian")}
                    onChange={(e) => handleCheckboxChange(e, "language", "Lithuanian")}
                  />
                  <span className="text-sm font-medium text-gray-700"> Lithuanian </span>
                </label>
              </li>
              <li>
                <label htmlFor="Malay" className="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="Malay"
                    className="size-5 rounded border-gray-300"
                    checked={selectedFilters.language.includes("Malay")}
                    onChange={(e) => handleCheckboxChange(e, "language", "Malay")}
                  />
                  <span className="text-sm font-medium text-gray-700"> Malay </span>
                </label>
              </li>
              <li>
                <label htmlFor="Maltese" className="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="Maltese"
                    className="size-5 rounded border-gray-300"
                    checked={selectedFilters.language.includes("Maltese")}
                    onChange={(e) => handleCheckboxChange(e, "language", "Maltese")}
                  />
                  <span className="text-sm font-medium text-gray-700"> Maltese </span>
             
             </label>
              </li>
              {/* Add more categories here */}
            </ul>
          </div>
        </div>

        <div className="overflow-hidden rounded-lg border">
          <div
            className="flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900 transition-all duration-200"
            onClick={() => toggleOpenCategory("country")}
          >
            <div>
              <div className="inline-flex items-center gap-3">
                <MdOutlineBusinessCenter className="w-5 h-5" />
                <span className="text-sm font-medium"> Country </span>
              </div>
            </div>
            <span className={`transition-all ml-auto ${openCategory.country ? "rotate-90" : ""}`}>
              <IoArrowForward />
            </span>
          </div>
          <div className={`transition-height duration-300 ease-in-out ${openCategory.country ? "max-h-screen" : "max-h-0"}`}>
            <ScrollArea className="h-[calc(100vh-300px)]">
            <ul className="space-y-1 border-t border-gray-200 p-4">
              {countries.map((country) => (
                <li key={country}>
                  <label htmlFor={country} className="inline-flex items-center gap-2">
                    <input
                      type="checkbox"
                      id={country}
                      className="size-5 rounded border-gray-300"
                      checked={selectedFilters.country.includes(country)}
                      onChange={(e) => handleCheckboxChange(e, "country", country)}
                    />
                    <span className="text-sm font-medium text-gray-700"> {country} </span>
                  </label>
                </li>
              ))}
              {/* Add more categories here */}
            </ul>
            </ScrollArea>
          </div>
        </div>

        <div className="overflow-hidden rounded-lg border">
          <div
            className="flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900 transition-all duration-200"
            onClick={() => toggleOpenCategory("industry")}
          >
            <div>
              <div className="inline-flex items-center gap-3">
                <MdOutlineBusinessCenter className="w-5 h-5" />
                <span className="text-sm font-medium"> Industry </span>
              </div>
            </div>
            <span className={`transition-all ml-auto ${openCategory.industry ? "rotate-90" : ""}`}>
              <IoArrowForward />
            </span>
          </div>
          <div className={`transition-height duration-300 ease-in-out ${openCategory.industry ? "max-h-screen" : "max-h-0"}`}>
            <ScrollArea className="h-[calc(100vh-300px)]">
            <ul className="space-y-1 border-t border-gray-200 p-4">
              {Industries.map((industry) => (
                <li key={industry}>
                  <label htmlFor={industry} className="inline-flex items-center gap-2">
                    <input
                      type="checkbox"
                      id={industry}
                      className="size-5 rounded border-gray-300"
                      checked={selectedFilters.industry.includes(industry)}
                      onChange={(e) => handleCheckboxChange(e, "industry", industry)}
                    />
                    <span className="text-sm font-medium text-gray-700"> {industry} </span>
                  </label>
                </li>
              ))}
              {/* Add more categories here */}
            </ul>
            </ScrollArea>
          </div>
        </div>

        <div className="overflow-hidden rounded-lg border">
          <div
            className="flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900 transition-all duration-200"
            onClick={() => toggleOpenCategory("practice")}
          >
            <div>
              <div className="inline-flex items-center gap-3">
                <MdOutlineBusinessCenter className="w-5 h-5" />
                <span className="text-sm font-medium"> Practice Areas </span>
              </div>
            </div>
            <span className={`transition-all ml-auto ${openCategory.practice ? "rotate-90" : ""}`}>
              <IoArrowForward />
            </span>
          </div>
          <div className={`transition-height duration-300 ease-in-out ${openCategory.practice ? "max-h-screen" : "max-h-0"}`}>
            <ScrollArea className="h-[calc(100vh-300px)]">
            <ul className="space-y-1 border-t border-gray-200 p-4">
              {practiseArea.map((practiceArea) => (
                <li key={practiceArea}>
                  <label htmlFor={practiceArea} className="inline-flex items-center gap-2">
                    <input
                      type="checkbox"
                      id={practiceArea}
                      className="size-5 rounded border-gray-300"
                      checked={selectedFilters.practiceAreas.includes(practiceArea)}
                      onChange={(e) => handleCheckboxChange(e, "practiceAreas", practiceArea)}
                    />
                    <span className="text-sm font-medium text-gray-700"> {practiceArea} </span>
                  </label>
                </li>
              ))}
              {/* Add more categories here */}
            </ul>
            </ScrollArea>
          </div>
        </div>
        <div className="overflow-hidden rounded-lg border">
          <div
            className="flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900 transition-all duration-200"
            onClick={() => toggleOpenCategory("mobile")}
          >
            <div>
              <div className="inline-flex items-center gap-3">
                <MdOutlineBusinessCenter className="w-5 h-5" />
                <span className="text-sm font-medium"> Mobile Availability </span>
              </div>
            </div>
            <span className={`transition-all ml-auto ${openCategory.mobile ? "rotate-90" : ""}`}>
              <IoArrowForward />
            </span>
          </div>
          <div className={`transition-height duration-300 ease-in-out ${openCategory.mobile ? "max-h-screen" : "max-h-0"}`}>
            <ul className="space-y-1 border-t border-gray-200 p-4">
              <li>
                <label htmlFor="yes" className="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="yes"
                    className="size-5 rounded border-gray-300"
                    checked={selectedFilters.mobileAvailable.includes("yes")}
                    onChange={(e) => handleCheckboxChange(e, "mobileAvailable", "yes")}
                  />
                  <span className="text-sm font-medium text-gray-700"> Yes </span>
                </label>
              </li>
              <li>
                <label htmlFor="no" className="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="no"
                    className="size-5 rounded border-gray-300"
                    checked={selectedFilters.mobileAvailable.includes("no")}
                    onChange={(e) => handleCheckboxChange(e, "mobileAvailable", "no")}
                  />
                  <span className="text-sm font-medium text-gray-700"> No </span>
                </label>
              </li>
            </ul>
          </div>
        </div>

        
        {/* Add more filter categories here */}
        <button className="flex gap-2 rounded-full bg-primary1 text-white font-bold px-6 py-3 text-xs transition-all w-fit items-center hover:bg-gray-900 hover:gap-4 duration-200 my-3">
          Apply
        </button>
      </div>
    </ScrollArea>
  );
}

export default DirectoryFilter;
