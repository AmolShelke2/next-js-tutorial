export default function AboutUsWithId({ params }: any) {
  return (
    <div>
      <h1 className="text-5xl text-center p-2">
        This is a about us page with ID: {params.id}
      </h1>
    </div>
  );
}
