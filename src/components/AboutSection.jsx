import React from 'react'
import Content from './Content'

function Section1() {
    const content1 = `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece 
  of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor 
  at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem 
  Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.`

  return (
    <section className="min-h-screen flex flex-col items-center pt-16 ">
      <Content title="About Zoofari" content={content1} textAlign={"centre"}/>
      <div className="flex justify-center mt-60">
        <Content title="Mission" content={content1} />
        <Content title="Our Values" content={content1} />
      </div>
    </section>
  )
}

export default Section1
