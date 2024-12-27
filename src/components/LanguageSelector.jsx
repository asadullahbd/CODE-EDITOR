import { Button, ButtonGroup, Dropdown } from "react-bootstrap";
import { LANGUAGE_VERSIONS } from "../utils/constants";
import { useState } from "react";
const languages = Object.entries(LANGUAGE_VERSIONS);

const LanguageSelector = ({ language, onSelect }) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div>
            <div className="ml-2 mb-4">
                <p
                    className="mb-2"
                    style={{ fontSize: "1.25rem", color: "#F4F4F9" }}
                >
                    Language:
                </p>
                <Dropdown as={ButtonGroup}>
                    <Button
                        variant="secondary"
                        style={{
                            color: "#000000",
                            background: isHovered ? "#8f7c00" : "#ffe74c",
                        }}
                        onMouseOver={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        {language}
                    </Button>
                    <Dropdown.Toggle
                        split
                        variant="secondary"
                        id="dropdown-split-basic"
                    />
                    <Dropdown.Menu
                        style={{ color: "#000000", background: "#ffe74c" }}
                    >
                        {languages.map(([lang, version]) => (
                            <Dropdown.Item
                                key={lang}
                                active={lang === language}
                                onClick={() => onSelect(lang)}
                            >
                                {lang}
                                &nbsp;
                                <span
                                    style={{
                                        color: "gray",
                                        fontSize: "0.875rem",
                                    }}
                                >
                                    ({version})
                                </span>
                            </Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
    );
};

export default LanguageSelector;
