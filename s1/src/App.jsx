import { useState, useMemo } from 'react'
import './App.css'

const FRIENDS_DATA = [
  {
    id: 1,
    name: 'Minh',
    nickname: 'Minh Mõm Mạnh',
    avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Minh',
    baoDegree: 'dangerous',
    layDegree: 101,
    simpDegree: 47,
    dangerDegree: 96,
    memes: [
      'Minh chưa báo thì thôi, Minh báo một cái là cả group bật chế độ sinh tồn 🫡',
      'Minh online = WiFi ổn, nhưng tâm lý anh em bắt đầu mất kết nối 📶💀',
      'Người ta đi chơi tạo kỷ niệm, Minh đi chơi tạo biên bản hiện trường 🚨',
    ],
  },
  {
    id: 2,
    name: 'An',
    nickname: 'An Ái Kỷ Luật',
    avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=An',
    baoDegree: 'normal',
    layDegree: 69,
    simpDegree: 108,
    dangerDegree: 39,
    memes: [
      'An không simp, An chỉ đang đầu tư cảm xúc dài hạn nhưng chưa thấy lãi 📉',
      'Mỗi lần An bảo “không thích nữa” là server tình cảm chuẩn bị bảo trì 💕',
      'An nhìn crush 3 giây, não tự render đám cưới 4K Ultra HD 🎬',
    ],
  },
  {
    id: 3,
    name: 'Tuấn',
    nickname: 'Tuấn Tấu Hài Offline',
    avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Tuan',
    baoDegree: 'warning',
    layDegree: 120,
    simpDegree: 22,
    dangerDegree: 57,
    memes: [
      'Tuấn mở mồm là meme tự cập nhật, admin cũng không kiểm duyệt kịp 🤡',
      'Tuấn không lầy, Tuấn là bản cập nhật lỗi của vũ trụ 🌌',
      'Ngồi cạnh Tuấn 5 phút: mất tập trung. 10 phút: mất nhân tính. 15 phút: mất luôn liêm sỉ 💀',
    ],
  },
  {
    id: 4,
    name: 'Hùng',
    nickname: 'Hùng Chủ Tịch',
    avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Hung',
    baoDegree: 'dangerous',
    layDegree: 88,
    simpDegree: 34,
    dangerDegree: 111,
    memes: [
      'Hùng không cần nói nhiều, chỉ cần nhìn là cả bàn tự kiểm điểm 🧍',
      'Hùng bước vào phòng, không khí tự động chuyển sang chế độ nghiêm túc 😭',
      'Độ nguy hiểm của Hùng không đo bằng phần trăm, đo bằng số người im lặng khi Hùng xuất hiện 💣',
    ],
  },
  {
    id: 5,
    name: 'Linh',
    nickname: 'Linh Lươn Lẹo',
    avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Linh',
    baoDegree: 'warning',
    layDegree: 99,
    simpDegree: 64,
    dangerDegree: 73,
    memes: [
      'Linh cười rất hiền, nhưng câu sau thường khiến nạn nhân phải tự vấn cuộc đời 😇',
      'Linh không trêu ai cả, Linh chỉ hỗ trợ bạn bè nhận ra điểm yếu tâm lý 🧠',
      'Một câu của Linh nhẹ như gió, nhưng sát thương tinh thần thì tính bằng tấn 📦',
    ],
  },
  {
    id: 6,
    name: 'Đức Cớp',
    nickname: 'Đức Cớp Content',
    avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=DucCop',
    baoDegree: 'dangerous',
    layDegree: 127,
    simpDegree: 51,
    dangerDegree: 119,
    memes: [
      'Đức Cớp không lấy ví, Đức Cớp lấy luôn spotlight của cả buổi 🦹‍♂️',
      'Ở đâu có content, ở đó có Đức Cớp đang lấp ló như NPC nhiệm vụ phụ 👀',
      'Đức Cớp xuất hiện là timeline bắt đầu lag vì quá nhiều tình huống vô tri 🧠💥',
    ],
  },
  {
    id: 7,
    name: 'Nam Non Nớt',
    nickname: 'Nam Newbie Ngơ Ngác',
    avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=NamNonNot',
    baoDegree: 'warning',
    layDegree: 93,
    simpDegree: 77,
    dangerDegree: 66,
    memes: [
      'Nam Non Nớt nhìn đời bằng ánh mắt chưa cập nhật patch xã hội 😭',
      'Nam hỏi một câu thôi mà cả nhóm phải mở họp khẩn cấp để giải thích 📚',
      'Nam không ngáo, Nam chỉ đang chạy phiên bản beta của nhân loại 🤖',
    ],
  },
]

export default function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filter, setFilter] = useState('all')
  const [currentMemeIndex, setCurrentMemeIndex] = useState({})

  const filteredFriends = useMemo(() => {
    return FRIENDS_DATA.filter((friend) => {
      const matchesSearch =
        friend.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        friend.nickname.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesFilter =
        filter === 'all' || friend.baoDegree === filter

      return matchesSearch && matchesFilter
    })
  }, [searchTerm, filter])

  const toggleRandomMeme = (friendId) => {
    const friend = FRIENDS_DATA.find((f) => f.id === friendId)
    if (friend) {
      const randomIndex = Math.floor(Math.random() * friend.memes.length)
      setCurrentMemeIndex((prev) => ({
        ...prev,
        [friendId]: randomIndex,
      }))
    }
  }

  const getMemeText = (friend) => {
    const index = currentMemeIndex[friend.id] || 0
    return friend.memes[index]
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-800 to-red-800 p-6">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-12">
        <h1 className="text-5xl font-black text-white text-center mb-2 drop-shadow-lg">
          🔥 BẠNG ĐIỂM BẠN BÈ 🔥
        </h1>
        <p className="text-xl text-pink-200 text-center drop-shadow">
          Đánh giá bạn bè một cách không tử tế nhất mà vẫn lầy 😂
        </p>
      </div>

      {/* Search & Filter */}
      <div className="max-w-7xl mx-auto mb-8 space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="flex-1">
            <input
              type="text"
              placeholder="🔍 Tìm kiếm bạn..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-white/60 border-2 border-white/30 focus:outline-none focus:border-yellow-300 transition text-lg"
            />
          </div>

          {/* Filter */}
          <div className="flex gap-2">
            {[
              { value: 'all', label: '📊 Tất cả' },
              { value: 'normal', label: '😇 Bình thường' },
              { value: 'warning', label: '⚠️ Hơi báo' },
              { value: 'dangerous', label: '🔴 Báo động đỏ' },
            ].map((option) => (
              <button
                key={option.value}
                onClick={() => setFilter(option.value)}
                className={`px-4 py-2 rounded-lg font-bold transition transform hover:scale-105 whitespace-nowrap ${
                  filter === option.value
                    ? 'bg-yellow-400 text-black shadow-lg scale-105'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Friends Grid */}
      <div className="max-w-7xl mx-auto">
        {filteredFriends.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-3xl text-white font-bold">😢 Không tìm thấy ai!</p>
            <p className="text-white/70 mt-2">Hãy thử tìm kiếm khác hoặc thay đổi bộ lọc.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFriends.map((friend) => (
              <div
                key={friend.id}
                className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl overflow-hidden border-2 border-white/20 hover:border-yellow-300 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-300/50 hover:scale-105 transform"
              >
                {/* Card Header */}
                <div className="relative overflow-hidden bg-gradient-to-r from-purple-500 to-pink-500 p-6 text-white text-center">
                  <img
                    src={friend.avatar}
                    alt={friend.name}
                    className="w-24 h-24 rounded-full mx-auto mb-3 border-4 border-white shadow-lg group-hover:scale-110 transition"
                  />
                  <h2 className="text-2xl font-black">{friend.name}</h2>
                  <p className="text-sm text-yellow-200 font-bold">{friend.nickname}</p>
                </div>

                {/* Meme Section */}
                <div className="p-5 bg-white/5 border-b border-white/10">
                  <p className="text-white text-center font-bold italic mb-4 text-sm">
                    💭 "{getMemeText(friend)}"
                  </p>
                  <button
                    onClick={() => toggleRandomMeme(friend.id)}
                    className="w-full bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-black font-bold py-2 px-4 rounded-lg transition hover:shadow-lg transform hover:scale-105"
                  >
                    🎲 Random Meme
                  </button>
                </div>

                {/* Stats */}
                <div className="p-5 space-y-3">
                  <StatBar label="Độ báo 🚨" value={
                    friend.baoDegree === 'dangerous'
                      ? 95
                      : friend.baoDegree === 'warning'
                        ? 60
                        : 30
                  } color="from-red-500 to-orange-500" />
                  <StatBar label="Độ lầy 🤪" value={friend.layDegree} color="from-green-500 to-emerald-500" />
                  <StatBar label="Độ simp 💕" value={friend.simpDegree} color="from-pink-500 to-rose-500" />
                  <StatBar label="Độ nguy hiểm 💣" value={friend.dangerDegree} color="from-purple-500 to-indigo-500" />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="max-w-7xl mx-auto mt-12 text-center text-white/70">
        <p className="text-sm">
          ✨ Tổng cộng {FRIENDS_DATA.length} bạn | Đang hiển thị {filteredFriends.length} | Được tạo bằng React + Tailwind ✨
        </p>
      </div>
    </div>
  )
}

function StatBar({ label, value, color }) {
  const percentage = Math.min(value, 100)
  return (
    <div className="text-white/90">
      <div className="flex justify-between text-xs font-bold mb-1">
        <span>{label}</span>
        <span className="text-yellow-300">{value}%</span>
      </div>
      <div className="w-full bg-black/30 rounded-full h-2 overflow-hidden border border-white/20">
        <div
          className={`h-full bg-gradient-to-r ${color} transition-all duration-500 rounded-full`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}
