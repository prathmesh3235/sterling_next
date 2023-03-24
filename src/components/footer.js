import React from "react";
import { CFooter, CLink } from "@coreui/react";

export default function Footer() {
	return (
		<>
			<CFooter className="flex bg-slate-600 p-10 text-center justify-around static bottom-0 right-0 w-full">
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
