import React, { createContext, useState, useContext, useEffect } from "react";

interface MenuContextProps {
	isMenuOpen: boolean;
	toggleMenu: () => void;
}

const MenuContext = createContext<MenuContextProps | undefined>(undefined);

export const MenuProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen((prev) => !prev);
	};

	useEffect(() => {
		// Update isMenuOpen based on screen width on mount
		const handleResize = () => {
			setIsMenuOpen(window.innerWidth > 1198);
		};

		// Attach event listener
		window.addEventListener("resize", handleResize);

		// Initial check on mount
		handleResize();

		// Cleanup event listener on unmount
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<MenuContext.Provider value={{ isMenuOpen, toggleMenu }}>
			{children}
		</MenuContext.Provider>
	);
};

export const useMenu = () => {
	const context = useContext(MenuContext);
	if (!context) {
		throw new Error("useMenu must be used within a MenuProvider");
	}
	return context;
};
