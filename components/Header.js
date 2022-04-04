
export default function Header({ title }) {
  return <h1 className="title">{title}</h1>
    <style>
       background-image:
         linear-gradient(to bottom, rgba(255,255,0,0.5), rgba(0,0,255,0.5)),
         url('jump.png');
    </style>
}
