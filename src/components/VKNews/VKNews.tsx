export default function VKNews() {
  return (
    <div className="news">
      <h2 id="news" className="title">
        НОВОСТИ
      </h2>
      <div className="news-container container">
        <iframe
          src="/vk-widget.html"
          width="100%"
          height="600"
          title="ВКонтакте новости"
          style={{ border: 'none', display: 'block' }}
        />
      </div>
    </div>
  );
}
