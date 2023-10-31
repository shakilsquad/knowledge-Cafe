import profile from'../../assets/images/profile.png'
const Header = () => {
    return (
        <div className='flex justify-between items-center container mx-auto px-3 py-2 border-b-4'>
            <h2 className='text-4xl'>knowledge  Cafe</h2>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;