import RecordButton from '../components/home/RecordButton';

export default function HomePage() {
	return (
		<div className="h-screen bg-background relative">
			<RecordButton className="absolute bottom-8 right-4" />
		</div>
	);
}
