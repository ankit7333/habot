const base = 'text-[15px] capitalize rounded-[5px] border-[1px] font-bold py-3 px-3 transition hover:opacity-80 w-full'

const styles = {
    primary : base + ' text-white bg-[#00732F]',
    secondary : base + ' border-[#00732F] text-[#00732F] px-4 hover:bg-[#00732F] hover:text-white',
    verified : base + ' bg-[#EB7150] text-white text-sm md:text-lg',

}
function Button({children, type, onClick}) {
    return (
        <button onClick={onClick} className={styles[type]}>{children}</button>
    )
}

export default Button
