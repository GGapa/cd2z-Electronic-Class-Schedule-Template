const _scheduleConfig = {

    // 倒计时目标：位于右侧框中的倒计时，输入日期即可，可以是中考高考期末等等，格式YYYY-MM-DD
    // 若想隐藏右侧的倒计时，请在下方冒号后填入'hidden', (包括引号)
    countdown_target: '2026-6-7',

    // 星期显示：左侧框是否显示，显示为true，隐藏为false
    // 直接将true或false填入冒号后边，没有引号
    week_display: true,

    // 科目名称：所有课程科目的简写及其对应全称，冒号前面(key)为简写，后面(value)为全称，不限字数，
    // 若存在多个课程简写相同，需要加以区分，可以为简写添加下角标，使用@分隔，如'自@语'，@前为简写，@后为下角标
    // 要求必须做到覆盖完全，否则可能会保错
    subject_name: {
        '自@语': '语文周测',
        '自@数': '数学周测',
        '自@英': '英语周测',
        '自@物': '物理周测',
        '自@化': '化学周测',
        '自@走': '走班周测',
        '自': '自习',
        '物': '物理',
        '英': '英语',
        '化': '化学',
        '语': '语文',
        '走': '走班',
        '体': '体育',
        '数': '数学',
        '生': '生物',
        '地': '地理',
        '史': '历史',
        '政': '政治',
        '班': '班会',
        '通': '通用技术',
        '心': '心理',
        '舞': '舞蹈',
        '信': '信息技术',
        '美': '美术',
        '音': '音乐',
        '选': '选修'
    },

    // 时间表: 每天课程安排的时间表，内层冒号前面为时间，后面为课程序号(从0开始的数字[不带'']) 或 课间具体名称(用''包裹中间写文字)
    // 这里的例子workday和weekend（外层）只是举例，你也可以自定义其名字(第一个字符不要为数字)
    // 比如如果你的学校周三半天，你可以在这里单独添加一个wednesday: {...}
    // 注：时间段中-后的时间要减一分钟 比如某节课40分钟，时间段为08:00-08:40，但实际配置时要配置'08:00-08:39'
    timetable: {
        workday: {
            '00:00-07:49': '早自习',
            '07:50-08:29': 0,
            '08:30-08:39': '课间',
            '08:40-09:19': 1,
            '09:20-09:49': '大课间',
            '09:50-10:29': 2,
            '10:30-10:39': '课间',
            '10:40-11:19': 3,
            '11:20-11:29': '课间',
            '11:30-12:19': 4,
            '12:20-14:14': '午休',
            '14:15-14:54': 5,
            '14:55-15:09': '课间',
            '15:10-15:49': 6,
            '15:50-15:59': '课间',
            '16:00-16:39': 7,
            '16:40-16:49': '课间',
            '16:50-17:29': 8,
            '17:30-18:14': '晚休',
            '18:30-22:19': 9,
            '22:20-23:59': '放学',
        },
        weekend: {
            '00:00-07:39': '早自习',
            '07:40-08:19': 0,
            '08:20-08:29': '课间',
            '08:30-09:09': 1,
            '09:10-09:19': '课间',
            '09:20-09:59': 2,
            '10:00-10:09': '课间',
            '10:10-10:49': 3,
            '10:50-10:59': '课间',
            '11:00-11:39': 4,
            '11:40-11:49': '课间',
            '11:50-12:29': 5,
            '12:30-23:59': '放学',
        },
        monday: {
            '00:00-08:09': '早自习',
            '08:10-08:49': 0,
            '08:50-08:59': '课间',
            '09:00-09:39': 1,
            '09:40-09:49': '课间',
            '09:50-10:29': 2,
            '10:30-10:39': '课间',
            '10:40-11:19': 3,
            '11:20-11:29': '课间',
            '11:30-12:19': 4,
            '12:20-14:14': '午休',
            '14:15-14:54': 5,
            '14:55-15:09': '课间',
            '15:10-15:49': 6,
            '15:50-15:59': '课间',
            '16:00-16:39': 7,
            '16:40-16:49': '课间',
            '16:50-17:29': 8,
            '17:30-18:14': '晚休',
            '18:30-22:19': 9,
            '22:20-23:59': '放学',
        },
        sunday: {
            '18:30-22:20': 0,
        },
    },

    // 分隔线: 课表中区分不同时段课程的分隔线配置，外层key（冒号前）部分与上面timeable相同
    // value（冒号后）为分隔线所在位置的前一个课程序号(从0开始的数字[不带''])
    divider: {
        workday: [4, 8],
        weekend: [5],
        monday: [4, 8],
        sunday: [0],
    },

    // 每日课程：配置星期几对应第几堂课是什么课，星期顺序不可以更改(星期日/一/二/三/四/五/六)，你可以对classList后面内容进行更改
    // 从classList后最外的中括号看起，里面的第几个元素的序号-1就是该元素的下标，这个下标对应你在上面timetable中配置的数字，课程用单引号包含，写入在subject_name中配置的简写
    // 如果该节课可能存在每周轮换，你可以用一个中括号把他们全部写进去如: ['(第一周课)物', '(第二周)化', '(第三周)地', '(第四周)数'](小括号及其内容无需填写, 最多支持四周轮换)
    // 下面的timetable中配置该日属于在上面的timetable中的哪一类，如周日属于weekend就这样写 timetable: 'weekend'，用单引号包含
    daily_class: [
        {
            Chinese: '日',
            English: 'SUN',
            classList: ['自'],
            timetable: 'sunday'
        },
        {
            Chinese: '一',
            English: 'MON',
            classList: ['英', ['语', '英'], '语', '化', '数', '生', '物', '体', '信', '自'],
            timetable: 'monday'
        },
        {
            Chinese: '二',
            English: 'TUE',
            classList: ['语', '数', '数', '物', '英', ['心', '舞'], '政', '自', '自', '自'],
            timetable: 'workday'
        },
        {
            Chinese: '三',
            English: 'WED',
            classList: ['英', '语', '数', '化', '物', '生', '通', '自', '班', '自'],
            timetable: 'workday'
        },
        {
            Chinese: '四',
            English: 'THR',
            classList: ['物', '化', '地', '英', '生', '体', '史', '语', '数', '自'],
            timetable: 'workday'
        },
        {
            Chinese: '五',
            English: 'FRI',
            classList: ['英', '数', '语', '化', '生', '物', ['美', '音'], '选', '选', '自'],
            timetable: 'workday'
        },
        {
            Chinese: '六',
            English: 'SAT',
            classList: ['化', '英', '数', '生', '物', '数'],
            timetable: 'weekend'
        }
    ],


    // 课表样式: 配置课表样式CSS变量, 包括字体大小，透明度等属性
    // 请不要更改冒号前半部分文字, 请更改冒号后单引号中的数字(切勿删除引号与数字后的单位), 如果你对CSS有所了解你也可以尝试更改CSS单位
    css_style: {
        '--center-font-size': '50px', // 中间课表中的课程简写单字的字体大小
        '--corner-font-size': '14px', // 左侧的星期中文角标与右侧的"天"字的字体大小
        '--countdown-font-size': '28px', // 课程或课间全称与倒计时的字体大小
        '--global-border-radius': '16px', // 所有背景框的圆角大小
        '--global-bg-opacity': '0.5', // 所有背景框的不透明度, 范围: [0, 1]
        '--container-bg-padding': '8px 14px', // 上面三个框各自的背景内边距, 前面的数字表示纵向边距，后面的数字表示横向边距
        '--countdown-bg-padding': '5px 12px', // 倒计时框的背景内边距, 前面的数字表示纵向边距，后面的数字表示横向边距
        '--container-space': '16px', // 上面三个框中间的间隔长度
        '--top-space': '16px', // 课表主体最顶端与电脑屏幕上边框的间隔长度
        '--main-horizontal-space': '8px', // 中间课表中的课程简写单字之间的间隔长度
        '--divider-width': '2px', // 分隔线宽度
        '--divider-margin': '6px', // 分隔线外边距
        '--triangle-size': '16px', // 倒计时框上方小三角箭头的大小
        '--sub-font-size': '20px', // 中间课表中的课程下角标(X@X)的字体大小
    }
}

var scheduleConfig = JSON.parse(JSON.stringify(_scheduleConfig))