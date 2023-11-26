// @ts-ignore
import LoadingSVG from "../../Assets/svg/loading.svg";
import BounceDots from "../BounceDots/BounceDots";

const Loading: React.FC = () => (
	<div className="flex min-h-[50%] w-full items-center justify-center gap-1">
		<div className="flex w-1/3 flex-col items-center justify-center">
			<img
				src={LoadingSVG}
				alt="weather loading"
				width={100}
				height={100}
			/>
			<div className="flex items-center justify-center gap-2">
				Loading
				<BounceDots />
			</div>
		</div>
	</div>
);

export default Loading;
