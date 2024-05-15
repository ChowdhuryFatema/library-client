

const Progress = () => {
    return (
        <section className="pt-5 md:pt-16 max-w-7xl mx-auto px-5 dark:bg-gray-100 dark:text-gray-800">
           
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">


                <div className="flex flex-col items-center p-4">
                <div className="radial-progress text-[#FF4240] mb-2" style={{"--value":70, "--size": "8rem"}} role="progressbar">70%</  div>
                    <h3 className="my-3 text-4xl">Novel</h3>
                    <div className="space-y-1 leading-tight text-center">
                        <p>As friendships bloom and ambitions clash, the journey through college unfolds, revealing the profound transformations that shape young minds in Semester Spectrum</p>
                        
                    </div>
                </div>
                <div className="flex flex-col items-center p-4">
                <div className="radial-progress text-[#49D293] mb-2" style={{"--value":60, "--size": "8rem"}} role="progressbar">60%</  div>
                    <h3 className="my-3 text-4xl">Thriller</h3>
                    <div className="space-y-1 leading-tight text-center">
                        <p>In a race against time, a web of deception unravels, leading to a heart-pounding showdown in Echoes of Deception, a gripping thriller.</p>
                        
                    </div>
                </div>
                <div className="flex flex-col items-center p-4">
                <div className="radial-progress text-[#FFB546] mb-2" style={{"--value":90, "--size": "8rem"}} role="progressbar">90%</  div>
                    <h3 className="my-3 text-4xl">History</h3>
                    <div className="space-y-1 leading-tight text-center">
                        <p>Through the annals of time, Chronicles of Power unveils the riveting saga of conquests, betrayals, and the relentless pursuit of dominance that shaped civilizations.</p>
                        
                    </div>
                </div>
                <div className="flex flex-col items-center p-4">
                <div className="radial-progress text-[#4C8DF1] mb-2" style={{"--value":80, "--size": "8rem"}} role="progressbar">80%</  div>
                    <h3 className="my-3 text-4xl">Drama</h3>
                    <div className="space-y-1 leading-tight text-center">
                        <p>In the tumult of love and loss, Echoes of Eternity delves into the intricacies of human relationships, where emotions collide and destinies intertwine in a gripping drama/</p>
                        
                    </div>
                </div>
              


            </div>
        </section>
    );
};

export default Progress;