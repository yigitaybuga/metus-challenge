const Loading = () => {
    return (
        <div className="flex h-full mt-10 w-full justify-center items-center">
            <div className="flex h-full justify-center items-center">
                <div>
                    <div style={{borderTopColor: 'transparent'}}
                         className="w-16 h-16 border-4 border-gray-700 dark:border-metus-white-100 border-dotted rounded-full animate-spin"></div>
                </div>
            </div>
        </div>
    )
}
export default Loading;
