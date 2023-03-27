import React from "react";
import { CFooter, CLink } from "@coreui/react";

export default function Footer() {
	return (
		<>
			<CFooter className="flex bg-slate-600 p-10 text-center justify-around  right-0 w-full bottom-0 left-0 z-20 border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6">
				<div>
					<CLink href="https://coreui.io">CoreUI</CLink>
					<span>&copy; 2023 creativeLabs.</span>
				</div>
				<div>
					<span>Powered by</span>
					<CLink href="https://coreui.io">CoreUI</CLink>
				</div>
			</CFooter>
		</>
	);
}
