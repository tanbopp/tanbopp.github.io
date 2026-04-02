export default function MediaItem({ item }) {
  if (item.type === 'video') {
    return (
      <div className="aspect-video bg-bg-card overflow-hidden">
        <video
          src={item.url}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>
    )
  }

  return (
    <div className="aspect-video bg-bg-card overflow-hidden">
      <img
        src={item.url}
        alt=""
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>
  )
}
