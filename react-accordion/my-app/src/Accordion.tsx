// type Props = {
//   topics: { id: number; title: string; content: string }[];
// };
export function Accordion() {
  return <TopicCard />;
}

// type Topics = {
//   topics: { id: number; title: string; content: string }[];
// };
function TopicCard() {
  return (
    <>
      <div className="row">
        <div>
          <button type="button" className="box">
            Hypertext Markup Language
          </button>
        </div>
        <div>
          <p className="content-box">
            Hypertext Markup Language (HTML) is the standard markup language for
            documents designed to be displayed in a web browser. It can be
            assisted by technologies such as Cascading Style Sheets (CSS) and
            scripting languages such as JavaScript.
          </p>
        </div>
      </div>
    </>
  );
}
