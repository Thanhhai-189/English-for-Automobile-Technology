document.body.insertAdjacentHTML("beforeend", `
    <!-- Nút mở Chat -->
    <div id="mg-chat-toggle" onclick="toggleChat()">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>
    </div>

    <!-- Cửa sổ Chat -->
    <div id="mg-chat-window">
        <div class="mg-chat-header">
            <div class="mg-header-info">
                <span>🤖</span>
                <h3>Tech Advisor</h3>
            </div>
            <button onclick="toggleChat()" class="mg-close-btn">
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/></svg>
            </button>
        </div>

        <div id="mg-messages">
            <div class="mg-message-row">
                <div class="mg-avatar mg-avatar-bot">🤖</div>
                <div class="mg-msg mg-msg-bot">
                    Chào bạn! Tôi có thể giúp bạn tra cứu các từ vựng về chuyên ngành ô tô trong tài liệu này.
                </div>
            </div>
        </div>

        <div class="mg-chat-footer">
            <!-- Gợi ý từ khóa -->
            <div id="autocomplete-list" class="mg-autocomplete-list"></div>

            <div class="mg-input-container">
                <input type="text" id="chat-input" placeholder="Tìm thuật ngữ..." autocomplete="off">
                <button id="send-btn" class="mg-send-btn" disabled>
                    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                </button>
            </div>
        </div>
    </div>
`);