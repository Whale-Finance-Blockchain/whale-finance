// import LogoApp from '../../assets/whale_app_logo.png';

export default function Dash() {

    return (
        <div className="flex w-full">
            {/* Sidebar */}
            {/* <div className="w-16 bg-blue-800 min-h-screen flex flex-col items-center py-5">
                
                <div className="mb-10">
                <div className="h-8 w-8 bg-white rounded mb-5"></div>
                <div className="h-8 w-8 bg-white rounded mb-5"></div>
                <div className="h-8 w-8 bg-white rounded mb-5"></div>
                <div className="h-8 w-8 bg-white rounded mb-5"></div>
                <div className="h-8 w-8 bg-white rounded mb-5"></div>
                </div>
            </div> */}
            <div className="flex flex-col flex-grow relative">
                {/* Top Bar */}
                <div className="absolute top-0 right-0 flex items-center bg-white p-4 shadow z-10"> {/* Absolute positioning */}
                    {/* Notification Icon - Replace `h-8 w-8` with actual icon size */}
                    <div className="h-8 w-8 bg-gray-300 rounded-full mr-4"></div>
                    
                    {/* Profile Photo - Replace with actual image */}
                    <div className="h-10 w-10 rounded-full overflow-hidden">
                        <img src="path_to_profile_photo.jpg" alt="Profile" />
                    </div>
                </div>
                <div className="bg-gray-100 p-5">
                    <header className="text-xl font-bold mb-4">Good morning, Jason Ranti</header>
                    <div className="grid grid-cols-3 gap-4">

                    {/* Bank Balance */}
                    <div className="bg-white rounded-lg shadow p-4">
                        <div>Your bank balance</div>
                        <div className="text-3xl font-bold">92%</div>
                    </div>

                    {/* Employees */}
                    <div className="bg-white rounded-lg shadow p-4">
                        <div>Employees working today</div>
                        <div className="text-3xl font-bold">2,420</div>
                    </div>

                    {/* Card Spending */}
                    <div className="bg-white rounded-lg shadow p-4">
                        <div>This week's card spending</div>
                        <div className="text-3xl font-bold">1,523</div>
                    </div>
                    
                    {/* Revenue Graph */}
                    <div className="bg-white rounded-lg shadow p-4 col-span-2">
                        <div>Revenue</div>
                        {/* Include your graph component here */}
                    </div>

                    {/* Daily Sales Summary */}
                    <div className="bg-white rounded-lg shadow p-4">
                        <div>Daily Sales Summary</div>
                        {/* Include your bar chart component here */}
                    </div>

                    {/* More components */}
                    {/* ... */}
                    </div>
                </div>
            </div>
        </div>
    )
}