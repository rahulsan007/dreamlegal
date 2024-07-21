"use client";
import { ChangeEvent, useState } from "react";
import { IoArrowForward } from "react-icons/io5";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { ScrollArea } from "./ui/scroll-area";

// Assuming you have this file for styles

function DirectoryFilter({ selectedFilters, handleFilterChange }: any) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchQuerycountry, setSearchQueryCountry] = useState("");
  const [searchQueryIndustry, setSearchQueryIndustry] = useState("");
  const [searchQueryPractice, setSearchQueryPractice] = useState("");

  const languages = [
    "Arabic",
    "Bulgarian",
    "Chinese",
    "Configurable",
    "Croatian",
    "Czech",
    "Danish",
    "Dutch",
    "English",
    "Estonian",
    "Finnish",
    "Flemish",
    "French",
    "German",
    "Greek",
    "Hebrew",
    "Hindi",
    "Hungarian",
    "Icelandic",
    "Indonesian",
    "Italian",
    "Japanese",
    "Korean",
    "Latvian",
    "Lithuanian",
    "Malay",
    "Maltese",
    "Mongolian",
    "Norwegian",
    "Polish",
    "Portuguese",
    "Romanian",
    "Russian",
    "Slovak",
    "Slovenian",
    "Spanish",
    "Swedish",
    "Thai",
    "Turkish",
    "Ukrainian",
    "Urdu",
    "Vietnamese",
    "Welsh",
    "Yiddish",
    "Zulu",
  ];
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
    price: false,
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

  const handleCheckboxChange = (
    e: ChangeEvent<HTMLInputElement>,
    filterType: string,
    value: string
  ) => {
    handleFilterChange(filterType, value);
  };

  const filteredLanguages = languages.filter((language) =>
    language.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredCountries = countries.filter((country) =>
    country.toLowerCase().includes(searchQuerycountry.toLowerCase())
  );

  const filteredIndustries = Industries.filter((industry) =>
    industry.toLowerCase().includes(searchQueryIndustry.toLowerCase())
  );

  const filteredPracticeAreas = practiseArea.filter((practiceArea) =>
    practiceArea.toLowerCase().includes(searchQueryPractice.toLowerCase())
  );

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
            <span
              className={`transition-all ml-auto ${
                openCategory.category ? "rotate-90" : ""
              }`}
            >
              <IoArrowForward />
            </span>
          </div>
          <div
            className={`transition-height duration-300 ease-in-out ${
              openCategory.category ? "max-h-screen" : "max-h-0"
            }`}
          >
            <ul className="space-y-1 border-t border-gray-200 p-4">
              <li>
                <label
                  htmlFor="Document Management and Automation"
                  className="inline-flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id="Document Management and Automation"
                    className="size-5 rounded border-gray-300"
                    checked={selectedFilters.categories.includes(
                      "Document Management and Automation"
                    )}
                    onChange={(e) =>
                      handleCheckboxChange(
                        e,
                        "categories",
                        "Document Management and Automation"
                      )
                    }
                  />
                  <span className="text-sm font-medium text-gray-700">
                    {" "}
                    Document Management and Automation{" "}
                  </span>
                </label>
              </li>
              <li>
                <label
                  htmlFor="Client Management Software"
                  className="inline-flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id="Client Management Software"
                    className="size-5 rounded border-gray-300"
                    checked={selectedFilters.categories.includes(
                      "Client Management Software"
                    )}
                    onChange={(e) =>
                      handleCheckboxChange(
                        e,
                        "categories",
                        "Client Management Software"
                      )
                    }
                  />
                  <span className="text-sm font-medium text-gray-700">
                    {" "}
                    Client Management Software{" "}
                  </span>
                </label>
              </li>
              <li>
                <label
                  htmlFor="Governance and Compliance and Risk Management"
                  className="inline-flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id="Governance and Compliance and Risk Management"
                    className="size-5 rounded border-gray-300"
                    checked={selectedFilters.categories.includes(
                      "Governance and Compliance and Risk Management"
                    )}
                    onChange={(e) =>
                      handleCheckboxChange(
                        e,
                        "categories",
                        "Governance and Compliance and Risk Management"
                      )
                    }
                  />
                  <span className="text-sm font-medium text-gray-700">
                    {" "}
                    Governance and Compliance and Risk Management{" "}
                  </span>
                </label>
              </li>
              <li>
                <label
                  htmlFor="Contract Management Software"
                  className="inline-flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id="Contract Management Software"
                    className="size-5 rounded border-gray-300"
                    checked={selectedFilters.categories.includes(
                      "Contract Management Software"
                    )}
                    onChange={(e) =>
                      handleCheckboxChange(
                        e,
                        "categories",
                        "Contract Management Software"
                      )
                    }
                  />
                  <span className="text-sm font-medium text-gray-700">
                    {" "}
                    Contract Management Software{" "}
                  </span>
                </label>
              </li>
              <li>
                <label
                  htmlFor="Digital Signature"
                  className="inline-flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id="Digital Signature"
                    className="size-5 rounded border-gray-300"
                    checked={selectedFilters.categories.includes(
                      "Digital Signature"
                    )}
                    onChange={(e) =>
                      handleCheckboxChange(e, "categories", "Digital Signature")
                    }
                  />
                  <span className="text-sm font-medium text-gray-700">
                    {" "}
                    Digital Signature{" "}
                  </span>
                </label>
              </li>
              <li>
                <label
                  htmlFor="E-billing and Invoicing"
                  className="inline-flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id="E-billing and Invoicing"
                    className="size-5 rounded border-gray-300"
                    checked={selectedFilters.categories.includes(
                      "E-billing and Invoicing"
                    )}
                    onChange={(e) =>
                      handleCheckboxChange(
                        e,
                        "categories",
                        "E-billing and Invoicing"
                      )
                    }
                  />
                  <span className="text-sm font-medium text-gray-700">
                    {" "}
                    E-billing and Invoicing{" "}
                  </span>
                </label>
              </li>
              <li>
                <label
                  htmlFor="E-discovery"
                  className="inline-flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id="E-discovery"
                    className="size-5 rounded border-gray-300"
                    checked={selectedFilters.categories.includes("E-discovery")}
                    onChange={(e) =>
                      handleCheckboxChange(e, "categories", "E-discovery")
                    }
                  />
                  <span className="text-sm font-medium text-gray-700">
                    {" "}
                    E-discovery{" "}
                  </span>
                </label>
              </li>
              <li>
                <label
                  htmlFor="Intellectual Property Management"
                  className="inline-flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id="Intellectual Property Management"
                    className="size-5 rounded border-gray-300"
                    checked={selectedFilters.categories.includes(
                      "Intellectual Property Management"
                    )}
                    onChange={(e) =>
                      handleCheckboxChange(
                        e,
                        "categories",
                        "Intellectual Property Management"
                      )
                    }
                  />
                  <span className="text-sm font-medium text-gray-700">
                    {" "}
                    Intellectual Property Management{" "}
                  </span>
                </label>
              </li>
              <li>
                <label
                  htmlFor="Litigation Management and Analytics"
                  className="inline-flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id="Litigation Management and Analytics"
                    className="size-5 rounded border-gray-300"
                    checked={selectedFilters.categories.includes(
                      "Litigation Management and Analytics"
                    )}
                    onChange={(e) =>
                      handleCheckboxChange(
                        e,
                        "categories",
                        "Litigation Management and Analytics"
                      )
                    }
                  />
                  <span className="text-sm font-medium text-gray-700">
                    {" "}
                    Litigation Management and Analytics{" "}
                  </span>
                </label>
              </li>
              <li>
                <label
                  htmlFor="Legal Workflow Automation"
                  className="inline-flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id="Legal Workflow Automation"
                    className="size-5 rounded border-gray-300"
                    checked={selectedFilters.categories.includes(
                      "Legal Workflow Automation"
                    )}
                    onChange={(e) =>
                      handleCheckboxChange(
                        e,
                        "categories",
                        "Legal Workflow Automation"
                      )
                    }
                  />
                  <span className="text-sm font-medium text-gray-700">
                    {" "}
                    Legal Workflow Automation{" "}
                  </span>
                </label>
              </li>
              <li>
                <label
                  htmlFor="Legal Research"
                  className="inline-flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id="Legal Research"
                    className="size-5 rounded border-gray-300"
                    checked={selectedFilters.categories.includes(
                      "Legal Research"
                    )}
                    onChange={(e) =>
                      handleCheckboxChange(e, "categories", "Legal Research")
                    }
                  />
                  <span className="text-sm font-medium text-gray-700">
                    {" "}
                    Legal Research{" "}
                  </span>
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
                <span className="text-sm font-medium"> Users </span>
              </div>
            </div>
            <span
              className={`transition-all ml-auto ${
                openCategory.customer ? "rotate-90" : ""
              }`}
            >
              <IoArrowForward />
            </span>
          </div>
          <div
            className={`transition-height duration-300 ease-in-out ${
              openCategory.customer ? "max-h-screen" : "max-h-0"
            }`}
          >
            <ul className="space-y-1 border-t border-gray-200 p-4">
              <li>
                <label
                  htmlFor="Individual Practitioner"
                  className="inline-flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id="Individual Practitioner"
                    className="size-5 rounded border-gray-300"
                    checked={selectedFilters.userCategories.includes(
                      "Individual Practitioner"
                    )}
                    onChange={(e) =>
                      handleCheckboxChange(
                        e,
                        "userCategories",
                        "Individual Practitioner"
                      )
                    }
                  />
                  <span className="text-sm font-medium text-gray-700">
                    {" "}
                    Individual Practitioner{" "}
                  </span>
                </label>
              </li>
              <li>
                <label
                  htmlFor="Law firms"
                  className="inline-flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id="Law firms"
                    className="size-5 rounded border-gray-300"
                    checked={selectedFilters.userCategories.includes(
                      "Law firms"
                    )}
                    onChange={(e) =>
                      handleCheckboxChange(e, "userCategories", "Law firms")
                    }
                  />
                  <span className="text-sm font-medium text-gray-700">
                    {" "}
                    Law firms{" "}
                  </span>
                </label>
              </li>
              <li>
                <label
                  htmlFor="Government departments"
                  className="inline-flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id="Government departments"
                    className="size-5 rounded border-gray-300"
                    checked={selectedFilters.userCategories.includes(
                      "Government departments"
                    )}
                    onChange={(e) =>
                      handleCheckboxChange(
                        e,
                        "userCategories",
                        "Government departments"
                      )
                    }
                  />
                  <span className="text-sm font-medium text-gray-700">
                    {" "}
                    Government departments{" "}
                  </span>
                </label>
              </li>
              <li>
                <label
                  htmlFor="Startups"
                  className="inline-flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id="Startups"
                    className="size-5 rounded border-gray-300"
                    checked={selectedFilters.userCategories.includes(
                      "Startups"
                    )}
                    onChange={(e) =>
                      handleCheckboxChange(e, "userCategories", "Startups")
                    }
                  />
                  <span className="text-sm font-medium text-gray-700">
                    {" "}
                    Startups{" "}
                  </span>
                </label>
              </li>
              <li>
                <label
                  htmlFor="Enterprises"
                  className="inline-flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id="Enterprises"
                    className="size-5 rounded border-gray-300"
                    checked={selectedFilters.userCategories.includes(
                      "Enterprises"
                    )}
                    onChange={(e) =>
                      handleCheckboxChange(e, "userCategories", "Enterprises")
                    }
                  />
                  <span className="text-sm font-medium text-gray-700">
                    {" "}
                    Enterprises{" "}
                  </span>
                </label>
              </li>
              <li>
                <label
                  htmlFor="Judiciary"
                  className="inline-flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id="Judiciary"
                    className="size-5 rounded border-gray-300"
                    checked={selectedFilters.userCategories.includes(
                      "Judiciary"
                    )}
                    onChange={(e) =>
                      handleCheckboxChange(e, "userCategories", "Judiciary")
                    }
                  />
                  <span className="text-sm font-medium text-gray-700">
                    {" "}
                    Judiciary{" "}
                  </span>
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
            <span
              className={`transition-all ml-auto ${
                openCategory.lang ? "rotate-90" : ""
              }`}
            >
              <IoArrowForward />
            </span>
          </div>
          <div
            className={`transition-height duration-300 ease-in-out ${
              openCategory.lang ? "max-h-screen" : "max-h-0"
            }`}
          >
            <div className="p-4">
              <input
                type="text"
                className="border rounded p-2 w-full text-sm "
                placeholder="Search languages..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <ul className="space-y-1 border-t border-gray-200 p-4">
              {filteredLanguages.map((language) => (
                <li key={language}>
                  <label
                    htmlFor={language}
                    className="inline-flex items-center gap-2"
                  >
                    <input
                      type="checkbox"
                      id={language}
                      className="size-5 rounded border-gray-300"
                      checked={selectedFilters.language.includes(language)}
                      onChange={(e) =>
                        handleCheckboxChange(e, "language", language)
                      }
                    />
                    <span className="text-sm font-medium text-gray-700">
                      {language}
                    </span>
                  </label>
                </li>
              ))}
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
                <span className="text-sm font-medium"> Headquaters </span>
              </div>
            </div>
            <span
              className={`transition-all ml-auto ${
                openCategory.country ? "rotate-90" : ""
              }`}
            >
              <IoArrowForward />
            </span>
          </div>
          <div
            className={`transition-height duration-300 ease-in-out ${
              openCategory.country ? "max-h-screen" : "max-h-0"
            }`}
          >
            <ScrollArea className="h-[calc(100vh-300px)]">
              <div className="p-4">
                <input
                  type="text"
                  className="border rounded p-2 w-full text-sm "
                  placeholder="Search countries..."
                  value={searchQuerycountry}
                  onChange={(e) => setSearchQueryCountry(e.target.value)}
                />
              </div>
              <ul className="space-y-1 border-t border-gray-200 p-4">
                {filteredCountries.map((country) => (
                  <li key={country}>
                    <label
                      htmlFor={country}
                      className="inline-flex items-center gap-2"
                    >
                      <input
                        type="checkbox"
                        id={country}
                        className="size-5 rounded border-gray-300"
                        checked={selectedFilters.country.includes(country)}
                        onChange={(e) =>
                          handleCheckboxChange(e, "country", country)
                        }
                      />
                      <span className="text-sm font-medium text-gray-700">
                        {country}
                      </span>
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
            <span
              className={`transition-all ml-auto ${
                openCategory.industry ? "rotate-90" : ""
              }`}
            >
              <IoArrowForward />
            </span>
          </div>
          <div
            className={`transition-height duration-300 ease-in-out ${
              openCategory.industry ? "max-h-screen" : "max-h-0"
            }`}
          >
            <ScrollArea className="h-[calc(100vh-300px)]">
              <div className="p-4">
                <input
                  type="text"
                  className="border rounded p-2 w-full text-sm "
                  placeholder="Search industries..."
                  value={searchQueryIndustry}
                  onChange={(e) => setSearchQueryIndustry(e.target.value)}
                />
              </div>
              <ul className="space-y-1 border-t border-gray-200 p-4">
                {filteredIndustries.map((industry) => (
                  <li key={industry}>
                    <label
                      htmlFor={industry}
                      className="inline-flex items-center gap-2"
                    >
                      <input
                        type="checkbox"
                        id={industry}
                        className="size-5 rounded border-gray-300"
                        checked={selectedFilters.industry.includes(industry)}
                        onChange={(e) =>
                          handleCheckboxChange(e, "industry", industry)
                        }
                      />
                      <span className="text-sm font-medium text-gray-700">
                        {" "}
                        {industry}{" "}
                      </span>
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
            <span
              className={`transition-all ml-auto ${
                openCategory.practice ? "rotate-90" : ""
              }`}
            >
              <IoArrowForward />
            </span>
          </div>
          <div
            className={`transition-height duration-300 ease-in-out ${
              openCategory.practice ? "max-h-screen" : "max-h-0"
            }`}
          >
            <ScrollArea className="h-[calc(100vh-300px)]">
              <div className="p-4">
                <input
                  type="text"
                  className="border rounded p-2 w-full text-sm"
                  placeholder="Search practice areas..."
                  value={searchQueryPractice}
                  onChange={(e) => setSearchQueryPractice(e.target.value)}
                />
              </div>
              <ul className="space-y-1 border-t border-gray-200 p-4">
                {filteredPracticeAreas.map((practiceArea) => (
                  <li key={practiceArea}>
                    <label
                      htmlFor={practiceArea}
                      className="inline-flex items-center gap-2"
                    >
                      <input
                        type="checkbox"
                        id={practiceArea}
                        className="size-5 rounded border-gray-300"
                        checked={selectedFilters.practiceAreas.includes(
                          practiceArea
                        )}
                        onChange={(e) =>
                          handleCheckboxChange(e, "practiceAreas", practiceArea)
                        }
                      />
                      <span className="text-sm font-medium text-gray-700">
                        {" "}
                        {practiceArea}{" "}
                      </span>
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
                <span className="text-sm font-medium">
                  {" "}
                  Mobile Availability{" "}
                </span>
              </div>
            </div>
            <span
              className={`transition-all ml-auto ${
                openCategory.mobile ? "rotate-90" : ""
              }`}
            >
              <IoArrowForward />
            </span>
          </div>
          <div
            className={`transition-height duration-300 ease-in-out ${
              openCategory.mobile ? "max-h-screen" : "max-h-0"
            }`}
          >
            <ul className="space-y-1 border-t border-gray-200 p-4">
              <li>
                <label htmlFor="yes" className="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="yes"
                    className="size-5 rounded border-gray-300"
                    checked={selectedFilters.mobileAvailable.includes("yes")}
                    onChange={(e) =>
                      handleCheckboxChange(e, "mobileAvailable", "yes")
                    }
                  />
                  <span className="text-sm font-medium text-gray-700">
                    {" "}
                    Yes{" "}
                  </span>
                </label>
              </li>
              <li>
                <label htmlFor="no" className="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="no"
                    className="size-5 rounded border-gray-300"
                    checked={selectedFilters.mobileAvailable.includes("no")}
                    onChange={(e) =>
                      handleCheckboxChange(e, "mobileAvailable", "no")
                    }
                  />
                  <span className="text-sm font-medium text-gray-700">
                    {" "}
                    No{" "}
                  </span>
                </label>
              </li>
            </ul>
          </div>
        </div>

        <div className="overflow-hidden rounded-lg border">
          <div
            className="flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900 transition-all duration-200"
            onClick={() => toggleOpenCategory("price")}
          >
            <div>
              <div className="inline-flex items-center gap-3">
                <MdOutlineBusinessCenter className="w-5 h-5" />
                <span className="text-sm font-medium"> Price </span>
              </div>
            </div>
            <span
              className={`transition-all ml-auto ${
                openCategory.price ? "rotate-90" : ""
              }`}
            >
              <IoArrowForward />
            </span>
          </div>
          <div
            className={`transition-height duration-300 ease-in-out ${
              openCategory.price ? "max-h-screen" : "max-h-0"
            }`}
          >
            <ul className="space-y-1 border-t border-gray-200 p-4">
              <li>
                <label htmlFor="fixed" className="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="fixed"
                    className="size-5 rounded border-gray-300"
                    checked={selectedFilters.price.includes("fixed")}
                    onChange={(e) =>
                      handleCheckboxChange(e, "price", "fixed")
                    }
                  />
                  <span className="text-sm font-medium text-gray-700">
                    {" "}
                    Fixed{" "}
                  </span>
                </label>
              </li>
              <li>
                <label htmlFor="custom" className="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="custom"
                    className="size-5 rounded border-gray-300"
                    checked={selectedFilters.price.includes("custom")}
                    onChange={(e) =>
                      handleCheckboxChange(e, "price", "custom")
                    }
                  />
                  <span className="text-sm font-medium text-gray-700">
                    {" "}
                    Custom{" "}
                  </span>
                </label>
              </li>
              <li>
                <label htmlFor="both" className="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="both"
                    className="size-5 rounded border-gray-300"
                    checked={selectedFilters.price.includes("both")}
                    onChange={(e) =>
                      handleCheckboxChange(e, "price", "both")
                    }
                  />
                  <span className="text-sm font-medium text-gray-700">
                    {" "}
                    Both{" "}
                  </span>
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
