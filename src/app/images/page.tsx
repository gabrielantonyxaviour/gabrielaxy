import BottomNav from "@/components/BottomNav";

const photos = [1, 2, 3, 4, 5, 6];

export default function ImagesPage() {
  return (
    <main className="min-h-screen pb-24">
      <div className="max-w-xl mx-auto px-6 pt-12">
        <h1 className="text-4xl font-bold tracking-tight mb-2">images</h1>
        <p className="text-gray-500 mb-8">a picture speaks a thousand words</p>

        <div className="grid grid-cols-2 gap-4">
          {photos.map((photo) => (
            <div
              key={photo}
              className="aspect-square bg-gray-100 rounded-xl"
            />
          ))}
        </div>
      </div>
      <BottomNav />
    </main>
  );
}
