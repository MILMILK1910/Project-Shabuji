import Footer from "../components/Footer"
import NevbarBack from "../components/NevbarBack"
import Link from "next/link"

export default function Page() {
  return (
    <>
      <div as="nav" className="bg-white">
        <NevbarBack />
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm flex justify-center">
            <img
              alt="Your Company"
              src="https://scontent.fcnx4-1.fna.fbcdn.net/v/t1.15752-9/462368127_1201967064371003_6279712095163667306_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=9f807c&_nc_ohc=1iW8ewglY9MQ7kNvgHywj6P&_nc_ht=scontent.fcnx4-1.fna&_nc_gid=A9hXRme4MXFxd5T7VQJldFH&oh=03_Q7cD1QEF0hvX-ghnv15w9WL_knLA8kWh2UenxdkTyqO7JSO1Cg&oe=6731022B"
              style={{ width: "200px", height: "200px" }}
            />
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm border border-gray-300 rounded-lg p-6 shadow-lg">
            <h2 className=" text-center text-2xl font-bold leading-9 tracking-tight text-gray-600">
              เข้าสู่ระบบสมาชิก
            </h2>
            <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
              <form action="#" method="POST" className="space-y-6">
                <div>
                  <label htmlFor="email" className="mt-10 text-center text-1xl font-bold leading-9 tracking-tight text-gray-600">
                    อีเมล
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-1xl font-medium leading-6 text-gray-900">
                      รหัสผ่าน
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      required
                      autoComplete="current-password"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                      <a href="/promotion" className="flex w-full justify-center rounded-md bg-orange-400 px-3 py-1.5 text-1xl font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        เข้าสู่ระบบ
                      </a>
                </div>
              </form>

              <p className="mt-10 text-center text-1xl text-gray-500 pb-8">
                ต้องการสมัครสมาชิก คลิก{' '}
                <a href="/singin" className="font-semibold leading-6 text-orange-400 hover:text-orange-600">
                  สมัครสมาชิก
                </a>
              </p>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  )
}