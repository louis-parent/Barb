export default {
	watch(element, deg) {
		element.addEventListener("mousemove", event => {
			const maxAngle = (deg || 15) + "deg";
			const rect = event.target.getBoundingClientRect();

			const centerX = rect.width / 2;
			const centerY = rect.height / 2;

			const vectorX = (event.offsetX / centerX) - 1;
			const vectorY = ((event.offsetY / centerY) - 1) * -1;
			
			element.style.transform = `rotateY(calc(${vectorX} * ${maxAngle})) rotateX(calc(${vectorY} * ${maxAngle}))`;
		});
								 
		element.addEventListener("mouseleave", () => {
			element.style.transform = null;						 
		});
	}
}
