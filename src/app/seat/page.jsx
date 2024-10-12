import NevbarBack from "../components/NevbarBack";
import Footer from "../components/Footer";


export default function Page() {
    return (
        <>
            
            <div as="nav" className="bg-white">
            <NevbarBack />
                <div className="flex min-h-full flex-1 flex-col justify-center px-6 lg:px-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-black">
                            จองคิว
                        </h2>
                    </div>

                    <div className="flex justify-center mt-4">
                        <img
                            src="https://scontent.fcnx4-1.fna.fbcdn.net/v/t1.15752-9/462553353_924282129725223_6537613586874166927_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=9f807c&_nc_ohc=_LtOeE0XpTIQ7kNvgHMr7uw&_nc_ht=scontent.fcnx4-1.fna&_nc_gid=AwMuwUFZ0-jF7xZ3jWgHyBd&oh=03_Q7cD1QF0_ZgGxXCd9j1OcxUnkqfYDtnaun5Ox0SFjk8NR5D5TQ&oe=67322890"
                            alt=""
                            style={{ width: '700px' }}
                            className="mt-4"
                        />
                    </div>

                    <h2 className="text-gray-800 text-center mt-10 font-bold text-xl">บริการที่นั่งร้านชาบู </h2>
                    <h2 className="text-gray-800 text-center mt-6">1.โซนสายพานที่เหมาะสำหรับคนที่ต้องการนั่งคนเดียว หรือมากับเพื่อนแต่อยากได้ฟิลกินคนละหม้อและเหมาะกับคนที่ชอบความสะดวกในการหยิบอาหารเอง </h2>
                    <h2 className="text-gray-800 text-center ">2.โซนที่นั่งรวมธรรมดาจะเหมาะสำหรับการมากันเป็นกลุ่มใหญ่และสามารถสั่งอาหารมาทานร่วมกันได้</h2>



                    <div className="mt-7 sm:mx-auto sm:w-full sm:max-w-sm">
                        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm border border-gray-300 rounded-lg p-6 shadow-lg">
                            <form action="#" method="POST" className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="mt-10 text-center text-1xl font-bold leading-9 tracking-tight text-gray-600">
                                        ชื่อ-นามสกุล
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            required
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <div className="flex items-center justify-between">
                                        <label htmlFor="number" className="block text-1xl font-medium leading-6 text-gray-900">
                                            เบอร์โทรศัพท์
                                        </label>
                                    </div>
                                    <div className="mt-2">
                                        <input
                                            id="number"
                                            name="number"
                                            type="tel"
                                            required
                                            autoComplete="tel"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                

                                <div>
                                    <div className="flex items-center justify-between">
                                        <label htmlFor="password" className="block text-1xl font-medium leading-6 text-gray-900">
                                            ว/ด/ป
                                        </label>
                                    </div>
                                    <div className="mt-2">
                                        <input
                                            id="date"
                                            name="date"
                                            type="date"
                                            required
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <div className="flex items-center justify-between">
                                        <label htmlFor="password" className="block text-1xl font-medium leading-6 text-gray-900">
                                            เวลา
                                        </label>
                                    </div>
                                    <div className="mt-2">
                                        <select
                                            id="time"
                                            name="time"
                                            required
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        >
                                            {/* สร้างตัวเลือกเวลาห่างกัน 2 ชั่วโมง */}
                                            {Array.from({ length: 12 }, (_, i) => {
                                                const hour = (i * 2) % 24; // เวลา 0-23
                                                const formattedHour = hour < 10 ? `0${hour}` : hour; // เพิ่ม 0 ข้างหน้า
                                                return (
                                                    <option key={i} value={`${formattedHour}:00`}>
                                                        {formattedHour}:00
                                                    </option>
                                                );
                                            })}
                                        </select>

                                    </div>
                                </div>

                            </form>
                        </div>
                        <div className="flex justify-center mt-12">
                            <a href="/payment"
                                className="flex w-full justify-center rounded-md bg-orange-400 px-3 py-1.5 text-1xl font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                คลิก! ชำระเงิน
                            </a>
                        </div>

                    </div>
                    <Footer />
                </div>

            </div>
        </>
    );
}