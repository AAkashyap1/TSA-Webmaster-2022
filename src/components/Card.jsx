export default function Card(props) {
  return (
    <div className={`mt-6 rounded-lg border border-gray-200 w-full bg-white shadow-lg transition ease-in-out hover:scale-105 ${props.noPadding ? "" : "p-8"}`}>
      {props.children}
    </div>
  )
}