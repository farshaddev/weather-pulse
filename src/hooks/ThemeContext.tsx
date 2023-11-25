import React, {
	createContext,
	useContext,
	useState,
	useEffect,
	ReactNode,
} from "react";

interface ThemeContextProps {
	isDarkMode: boolean | null;
	toggleDarkMode: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

interface ThemeProviderProps {
	children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
	const [isDarkMode, setDarkMode] = useState<boolean | null>(null);

	const toggleDarkMode = () => {
		setDarkMode((prevMode) => !prevMode);
	};

	useEffect(() => {
		const storedTheme = localStorage.getItem("theme");
		if (storedTheme) {
			setDarkMode(storedTheme === "dark");
		} else {
			// If no theme preference found, set default to dark
			setDarkMode(true);
			localStorage.setItem("theme", "dark"); // Set default theme in localStorage
		}
	}, []);

	useEffect(() => {
		if (isDarkMode !== null)
			localStorage.setItem("theme", isDarkMode ? "dark" : "light");
	}, [isDarkMode]);

	const contextValue: ThemeContextProps = {
		isDarkMode,
		toggleDarkMode,
	};

	return (
		<ThemeContext.Provider value={contextValue}>
			{children}
		</ThemeContext.Provider>
	);
};

export const useTheme = () => {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error("useTheme must be used within a ThemeProvider");
	}
	return context;
};
