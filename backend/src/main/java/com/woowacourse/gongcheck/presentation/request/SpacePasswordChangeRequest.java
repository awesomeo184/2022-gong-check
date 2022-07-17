package com.woowacourse.gongcheck.presentation.request;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;
import lombok.Getter;

@Getter
public class SpacePasswordChangeRequest {

    @NotNull
    @Size(min = 4, max = 4, message = "비밀번호 길이가 올바르지 않습니다")
    @Pattern(regexp = "\\d+", message = "비밀번호는 숫자로만 이루어져 있어야 합니다")
    private String password;

    private SpacePasswordChangeRequest() {
    }

    public SpacePasswordChangeRequest(final String password) {
        this.password = password;
    }
}