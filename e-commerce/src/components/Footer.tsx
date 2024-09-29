const Footer= () => {
    return (
        <footer className="bg-white mt-12 p-6 border-t border-gray-300">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h4 className="font-bold text-lg mb-4">Customer Care</h4>
            <ul>
              <li className="mb-2">
                <strong>Phone:</strong> 0804-1-871-871
              </li>
              <li className="mb-2">
                <strong>Email:</strong>{" "}
                <a href="mailto:customer.care@blibli.com" className="text-blue-600 hover:underline">
                  customer.care@blibli.com
                </a>
              </li>
              <li className="mb-2">
                <strong>Help Center:</strong>{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  Pusat Bantuan
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Info Blibli</h4>
            <ul>
              <li className="mb-2">
                <a href="#" className="text-blue-600 hover:underline">
                  Tentang Blibli
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-blue-600 hover:underline">
                  Blog Blibli Friends
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-blue-600 hover:underline">
                  Siaran Pers
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-blue-600 hover:underline">
                  Kabar Terbaru
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Follow Us</h4>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="text-blue-600 hover:underline">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:underline">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:underline">
                  Twitter
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Payment Methods</h4>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Blibli_Logo.svg/512px-Blibli_Logo.svg.png"
              alt="Payment Methods"
              className="w-32"
            />
          </div>
        </div>
      </footer>
    )
}

export default Footer