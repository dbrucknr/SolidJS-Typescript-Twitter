import { For } from "solid-js"

const randomize = () => Math.floor(Math.random() * 500);

const trends = [
    {
        category: "Sports",
        contents: "They won big",
        glideCount: randomize()
    },
    {
        category: "Finance",
        contents: "Stocks that are growing",
        glideCount: randomize()

    },
    {
        category: "Gaming",
        contents: "Hogwarts Legacy",
        glideCount: randomize()

    },    
    {
        category: "Economy",
        contents: "United States Dollar",
        glideCount: randomize()

    },    
    {
        category: "Celebrities",
        contents: "Mark the Zuck",
        glideCount: randomize()    
    },
    {
        category: "Movies",
        contents: "When will MCU stop",
        glideCount: randomize()

    }
]
const TrendsSidebar = () => {
    return (
        <div class="bg-gray-800 overflow-hidden flex-it rounded-2xl">
            <div class="flex-it p-4">
                <span class="text-xl font-bold">Trends</span>
            </div>
            <For each={trends}>
                {({ category, contents, glideCount }) =>
                    <div class="flex-it p-4 cursor-pointer transition duration-200 hover:bg-gray-700">
                        <div class="flex-it">
                            <span class="text-gray-400 text-sm">
                                { contents }
                            </span>
                            <span class="text-lg font-bold">{ category }</span>
                            <span class="text-gray-400 text-sm">{ glideCount }</span>
                        </div>
                    </div> 
                }
            </For>

        </div>
    )
}

export default TrendsSidebar